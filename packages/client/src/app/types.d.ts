declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.jpg' {
	const src: string;
	export = src;
}
declare module '*.jpeg' {
	const src: string;
	export = src;
}
declare module '*.png' {
	const src: string;
	export = src;
}
declare module '*.svg' {
	const src: string;
	export = src;
}
