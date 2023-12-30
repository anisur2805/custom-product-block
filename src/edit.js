import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from "@wordpress/url";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	ToggleControl,
	RangeControl,
	PanelBody,
	SelectControl,
} from "@wordpress/components";

import "./editor.scss";
import CPB_Pagination from "./pagination";

export default function Edit({ attributes, setAttributes }) {
	const {
		products,
		orderBy,
		totalItems,
		itemsPerRow,
		toggleField
	} = attributes;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const queryParams = {
					orderby: orderBy,
					per_page: totalItems,
					order: "asc",
				};

				queryParams.orderby === "price-desc"
					? (queryParams.order = "desc")
					: "asc";
				queryParams.orderby === "price-desc"
					? (queryParams.orderby = "price")
					: orderBy;

				const response = await apiFetch({
					path: addQueryArgs("/wc/v3/products", queryParams),
				});

				setAttributes({ products: response });
			} catch (error) {
				console.log("Error fetching products", error);
			}
		};
		fetchData();
	}, [orderBy, totalItems, itemsPerRow]);

	function onChangeItemsPerPage(value) {
		setAttributes({ itemsPerRow: value });
	}

	function onChangeToggleField(newValue) {
		setAttributes({ toggleField: newValue });
	}

	const pages = [
		1,
		2,
		3,
		4,
	];
	const onPageChange = () => {};
	const showFirstPage = true;
	const showFirstPageEllipsis = true;
	const showLastPage = true;
	const showLastPageEllipsis = true;
	const currentPage = 1;
	const totalPages = true;
	const displayNextAndPreviousArrows = true;

	return (
		<>
			<div {...useBlockProps()}>
				{/* Sidebar */}
				<InspectorControls>
					<PanelBody title={__("Settings")}>
						<RangeControl
							label="Columns"
							value={itemsPerRow}
							onChange={onChangeItemsPerPage}
							min={1}
							max={4}
						/>

						<SelectControl
							label="Number of Products"
							value={totalItems}
							options={[
								{ value: "5", label: "5" },
								{ value: "10", label: "10" },
								{ value: "20", label: "20" },
								{ value: "50", label: "50" },
							]}
							onChange={(value) => setAttributes({ totalItems: value })}
						/>

						<label>{__("Select Order", "custom-product-block")}</label>
						<SelectControl
							className="product-filter-sort"
							value={orderBy}
							onChange={(e) => setAttributes({ orderBy: e })}
							options={[
								{ value: "menu_order", label: "Default sorting (Menu Order)" },
								{ value: "date", label: "Latest" },
								{ value: "rating", label: "Rating" },
								{ value: "popularity", label: "Popularity" },
								{ value: "price", label: "Price: low to high" },
								{ value: "price-desc", label: "Price: high to low" },
							]}
						/>

						<ToggleControl
							label="Toggle Sorting"
							checked={toggleField}
							onChange={onChangeToggleField}
						/>
					</PanelBody>
				</InspectorControls>
				{/* #Sidebar */}

				{toggleField && (
					<div className="products-header">
						<RichText
							tagName="h2"
							value={attributes.content}
							onChange={(content) => setAttributes({ content })}
							placeholder={__("Enter content", "custom-product-block")}
						/>

						<div className="product-filter-area">
							<select
								className="product-filter-sort"
								value={orderBy}
								onChange={(e) => setAttributes({ orderBy: e.target.value })}
							>
								<option>Select Sort Order</option>
								<option value="menu_order">
									{__("Default sorting (Menu Order)", "custom-product-block")}
								</option>
								<option value="date">
									{__("Latest", "custom-product-block")}
								</option>
								<option value="rating">
									{__("Rating", "custom-product-block")}
								</option>
								<option value="popularity">
									{__("Popularity", "custom-product-block")}
								</option>
								<option value="price">
									{__("Price: low to high", "custom-product-block")}
								</option>
								<option value="price-desc">
									{__("Price: high to low", "custom-product-block")}
								</option>
							</select>

							<select
								value={itemsPerRow}
								onChange={(e) =>
									setAttributes({ itemsPerRow: parseInt(e.target.value, 10) })
								}
							>
								<option>{__("Items Per Row", "custom-product-block")}</option>
								<option value="1">
									{__("One Item", "custom-product-block")}
								</option>
								<option value="2">
									{__("Two Items", "custom-product-block")}
								</option>
								<option value="3">
									{__("Three Items", "custom-product-block")}
								</option>
								<option value="4">
									{__("Four Items", "custom-product-block")}
								</option>
							</select>

							<select
								value={totalItems}
								onChange={(e) =>
									setAttributes({ totalItems: parseInt(e.target.value, 10) })
								}
							>
								<option>
									{__("Number of products", "custom-product-block")}
								</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="20">20</option>
								<option value="50">50</option>
							</select>
						</div>
					</div>
				)}

				<ul className={`products grid grid-${itemsPerRow}`}>
					{products.map((product) => (
						<li key={product.id}>
							<a href={product.permalink}>
								<img className="full" src={product.images[0].src} />
								<div className="product-content">
									<h3>{product.name}</h3>
									<div
										className=""
										dangerouslySetInnerHTML={{
											__html: product.short_description,
										}}
									/>
									<div>
										{product.on_sale && (
											<span className="on-sale">On Sale</span>
										)}

										{product.type === "variable" ? (
											<div
												dangerouslySetInnerHTML={{ __html: product.price_html }}
											/>
										) : product.on_sale ? (
											<span>
												$<del>{product.regular_price}</del> -{" "}
												{product.sale_price}
											</span>
										) : (
											<span>${product.regular_price}</span>
										)}
									</div>
									<div>{product.categories[0].name}</div>
									<a
										className="components-button editor-post-publish-button editor-post-publish-button__button is-primary"
										href={`/shop?add-to-cart=${product.id}`}
									>
										{__("Add to cart", "custom-product-block")}
									</a>
								</div>
							</a>
						</li>
					))}
				</ul>

				{/* <CPB_Pagination displayNextAndPreviousArrows={displayNextAndPreviousArrows} pages={pages} showFirstPage={showFirstPage} showFirstPageEllipsis={showFirstPageEllipsis} showLastPage={showLastPage} showLastPageEllipsis={showLastPageEllipsis} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} /> */}
			</div>
		</>
	);
}