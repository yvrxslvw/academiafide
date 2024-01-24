import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from 'shared/api';
import { Loader, Paragraph, Title } from 'shared/UI';
import { formatImageUrl } from 'shared/utils';
import { Item } from 'entities/shop';
import { AddNewButton } from 'features/NewPost';
import { ActionsDropdown, PurchaseButton } from 'features/ShopItem';
import cl from './style.module.scss';
import { AddNewProduct } from '../AddNewProduct';
import { EditProduct } from '../EditProduct';
import { DeleteProduct } from '../DeleteProduct';
import { ErrorModal } from '../ErrorModal';

export const ShopList: FC = () => {
	const { t } = useTranslation();
	const [isCreateProductModalShown, setIsCreateProductModalShown] = useState(false);
	const [isEditProductModalShown, setIsEditProductModalShown] = useState(false);
	const [isDeleteProductModalShown, setIsDeleteProductModalShown] = useState(false);
	const [isErrorModalShown, setIsErrorModalShown] = useState(false);
	const [editionId, setEditionId] = useState(-1);
	const [deletionId, setDeletionId] = useState(-1);
	const { data, isError, isLoading, refetch } = useGetProductsQuery(null, { pollingInterval: 60 * 1000 });

	const onEditHandler = (id: number) => {
		setEditionId(id);
		setIsEditProductModalShown(true);
	};

	const onDeleteHandler = (id: number) => {
		setDeletionId(id);
		setIsDeleteProductModalShown(true);
	};

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>{t('Tienda de Academia Fide')}</Title>
			<section className={cl.AddNewButton}>
				<AddNewButton setModalShown={setIsCreateProductModalShown} />
			</section>
			{isLoading ? (
				<Loader />
			) : isError || !data ? (
				<Paragraph small>{t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')}</Paragraph>
			) : data.length === 0 ? (
				<Paragraph small>{t('Aún no hay productos.')}</Paragraph>
			) : (
				<section className={cl.ShopList}>
					{data.map(({ id, title, description, image }) => (
						<Item
							title={title}
							description={description}
							imageUrl={formatImageUrl(image)}
							purchaseButton={<PurchaseButton itemId={id} setErrorModalShown={setIsErrorModalShown} />}
							actionsDropdown={
								<ActionsDropdown productId={id} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} />
							}
							key={id}
						/>
					))}
				</section>
			)}
			{data && (
				<>
					<AddNewProduct
						isModalShown={isCreateProductModalShown}
						setIsModalShown={setIsCreateProductModalShown}
						refetch={refetch}
					/>
					<EditProduct
						product={data[data.findIndex(product => product.id === editionId)]}
						isModalShown={isEditProductModalShown}
						setIsModalShown={setIsEditProductModalShown}
						refetch={refetch}
					/>
					<DeleteProduct
						product={data[data.findIndex(product => product.id === deletionId)]}
						isModalShown={isDeleteProductModalShown}
						setIsModalShown={setIsDeleteProductModalShown}
						refetch={refetch}
					/>
					<ErrorModal isShown={isErrorModalShown} setIsShown={setIsErrorModalShown} />
				</>
			)}
		</div>
	);
};
