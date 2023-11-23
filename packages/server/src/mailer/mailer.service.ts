import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
	private declare CLIENT_ID: string;

	private declare CLIENT_SECRET: string;

	private declare REFRESH_TOKEN: string;

	private declare REDIRECT_URI: string;

	private declare USER: string;

	private declare oAuth2Client: OAuth2Client;

	constructor() {
		this.CLIENT_ID = process.env.OAUTH_CLIENT_ID;
		this.CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
		this.REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
		this.REDIRECT_URI = process.env.OAUTH_REDIRECT_URI;
		this.USER = process.env.MAIL_USER;
		this.oAuth2Client = new google.auth.OAuth2({
			clientId: this.CLIENT_ID,
			clientSecret: this.CLIENT_SECRET,
			redirectUri: this.REDIRECT_URI,
		});

		this.oAuth2Client.setCredentials({ refresh_token: this.REFRESH_TOKEN });
	}

	private async authorize() {
		const tokenData = await this.oAuth2Client.getAccessToken();
		return nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: this.USER,
				clientId: this.CLIENT_ID,
				clientSecret: this.CLIENT_SECRET,
				refreshToken: this.REFRESH_TOKEN,
				accessToken: tokenData.token,
			},
			tls: {
				rejectUnauthorized: true,
			},
		});
	}

	async sendMessage(recipient: string, title: string, text: string) {
		const transporter = await this.authorize();
		const info = await transporter.sendMail({
			to: recipient,
			subject: title,
			html: `
				<h1>Academia Fide</h1>
				<h3>${text}</h3>
			`,
		});
		if (info.accepted.length > 0 && info.rejected.length === 0) return true;
		else return false;
	}
}
