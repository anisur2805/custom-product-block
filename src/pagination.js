import { __ } from "@wordpress/i18n";
import classNames from "classnames";

export default function CPB_Pagination({
	displayNextAndPreviousArrows,
	showFirstPage,
	showFirstPageEllipsis,
	showLastPage,
	showLastPageEllipsis,
	currentPage,
	totalPages,
	onPageChange,
    pages,
}) {
	return (
		<div className="wc-block-pagination wc-block-components-pagination">
			{displayNextAndPreviousArrows && (
				<button
					className="wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow"
					onClick={() => onPageChange(currentPage - 1)}
					title={__("Previous page", "woo-gutenberg-products-block")}
					disabled={currentPage <= 1}
				>
					<label>{__("Previous page", "custom-product-block")}</label>
				</button>
			)}
			{showFirstPage && (
				<button
					className={classNames(
						"wc-block-pagination-page",
						"wc-block-components-pagination__page",
						{
							"wc-block-pagination-page--active": currentPage === 1,
							"wc-block-components-pagination__page--active": currentPage === 1,
						},
					)}
					onClick={() => onPageChange(1)}
					disabled={currentPage === 1}
				>
					<label>{__("Page", "custom-product-block")}</label>
				</button>
			)}

			{showFirstPageEllipsis && (
				<span
					className="wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis"
					aria-hidden="true"
				>
					{__("…", "woo-gutenberg-products-block")}
				</span>
			)}

			{pages.map((page) => {
				return (
					<button
						key={page}
						className={classNames(
							"wc-block-pagination-page",
							"wc-block-components-pagination__page",
							{
								"wc-block-pagination-page--active": currentPage === page,
								"wc-block-components-pagination__page--active":
									currentPage === page,
							},
						)}
						onClick={
							currentPage === page ? undefined : () => onPageChange(page)
						}
						disabled={currentPage === page}
					>
						<label>{__("Page", "custom-product-block")}</label>
					</button>
				);
			})}
			{showLastPageEllipsis && (
				<span
					className="wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis"
					aria-hidden="true"
				>
					{__("…", "woo-gutenberg-products-block")}
				</span>
			)}
			{showLastPage && (
				<button
					className={classNames(
						"wc-block-pagination-page",
						"wc-block-components-pagination__page",
						{
							"wc-block-pagination-page--active": currentPage === totalPages,
							"wc-block-components-pagination__page--active":
								currentPage === totalPages,
						},
					)}
					onClick={() => onPageChange(totalPages)}
					disabled={currentPage === totalPages}
				>
					<label>{__("Page", "custom-product-block")}</label>
				</button>
			)}
			{displayNextAndPreviousArrows && (
				<button
					className="wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow"
					onClick={() => onPageChange(currentPage + 1)}
					title={__("Next page", "woo-gutenberg-products-block")}
					disabled={currentPage >= totalPages}
				>
					<label>{__("Next Page", "custom-product-block")}</label>
				</button>
			)}
		</div>
	);
}
