/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ "./src/pagination.js");









function Edit({
  attributes,
  setAttributes
}) {
  const {
    products,
    orderBy,
    totalItems,
    itemsPerRow,
    checkboxField,
    radioField,
    textField,
    toggleField,
    selectField
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fetchData = async () => {
      try {
        const queryParams = {
          orderby: orderBy,
          per_page: totalItems,
          order: "asc"
        };
        queryParams.orderby === "price-desc" ? queryParams.order = "desc" : "asc";
        queryParams.orderby === "price-desc" ? queryParams.orderby = "price" : orderBy;
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
          path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)("/wc/v3/products", queryParams)
        });
        setAttributes({
          products: response
        });
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchData();
  }, [orderBy, totalItems, itemsPerRow]);
  function onChangeItemsPerPage(value) {
    setAttributes({
      itemsPerRow: value
    });
  }
  function onChangeToggleField(newValue) {
    setAttributes({
      toggleField: newValue
    });
  }
  const pages = [1, 2, 3, 4];
  const onPageChange = () => {};
  const showFirstPage = true;
  const showFirstPageEllipsis = true;
  const showLastPage = true;
  const showLastPageEllipsis = true;
  const currentPage = 1;
  const totalPages = true;
  const displayNextAndPreviousArrows = true;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: "Columns",
    value: itemsPerRow,
    onChange: onChangeItemsPerPage,
    min: 1,
    max: 4
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: "Number of Products",
    value: totalItems,
    options: [{
      value: "5",
      label: "5"
    }, {
      value: "10",
      label: "10"
    }, {
      value: "20",
      label: "20"
    }, {
      value: "50",
      label: "50"
    }],
    onChange: value => setAttributes({
      totalItems: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Order", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    className: "product-filter-sort",
    value: orderBy,
    onChange: e => setAttributes({
      orderBy: e
    }),
    options: [{
      value: "menu_order",
      label: "Default sorting (Menu Order)"
    }, {
      value: "date",
      label: "Latest"
    }, {
      value: "rating",
      label: "Rating"
    }, {
      value: "popularity",
      label: "Popularity"
    }, {
      value: "price",
      label: "Price: low to high"
    }, {
      value: "price-desc",
      label: "Price: high to low"
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Toggle Sorting",
    checked: toggleField,
    onChange: onChangeToggleField
  }))), toggleField && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "products-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    tagName: "h2",
    value: attributes.content,
    onChange: content => setAttributes({
      content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter content", "custom-product-block")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-filter-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "product-filter-sort",
    value: orderBy,
    onChange: e => setAttributes({
      orderBy: e.target.value
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Select Sort Order"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "menu_order"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Default sorting (Menu Order)", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "date"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Latest", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rating"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Rating", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "popularity"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Popularity", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "price"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Price: low to high", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "price-desc"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Price: high to low", "custom-product-block"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: itemsPerRow,
    onChange: e => setAttributes({
      itemsPerRow: parseInt(e.target.value, 10)
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Items Per Row", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "1"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("One Item", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Two Items", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three Items", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "4"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Four Items", "custom-product-block"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: totalItems,
    onChange: e => setAttributes({
      totalItems: parseInt(e.target.value, 10)
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Number of products", "custom-product-block")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "5"
  }, "5"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "10"
  }, "10"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "20"
  }, "20"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "50"
  }, "50")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `products grid grid-${itemsPerRow}`
  }, products.map(product => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: product.id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: product.permalink
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "full",
    src: product.images[0].src
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, product.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "",
    dangerouslySetInnerHTML: {
      __html: product.short_description
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, product.on_sale && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "on-sale"
  }, "On Sale"), product.type === "variable" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: product.price_html
    }
  }) : product.on_sale ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "$", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("del", null, product.regular_price), " -", " ", product.sale_price) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "$", product.regular_price)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, product.categories[0].name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "components-button editor-post-publish-button editor-post-publish-button__button is-primary",
    href: `/shop?add-to-cart=${product.id}`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add to cart", "custom-product-block"))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayNextAndPreviousArrows: displayNextAndPreviousArrows,
    pages: pages,
    showFirstPage: showFirstPage,
    showFirstPageEllipsis: showFirstPageEllipsis,
    showLastPage: showLastPage,
    showLastPageEllipsis: showLastPageEllipsis,
    currentPage: currentPage,
    totalPages: totalPages,
    onPageChange: onPageChange
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CPB_Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function CPB_Pagination({
  displayNextAndPreviousArrows,
  showFirstPage,
  showFirstPageEllipsis,
  showLastPage,
  showLastPageEllipsis,
  currentPage,
  totalPages,
  onPageChange,
  pages
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-pagination wc-block-components-pagination"
  }, displayNextAndPreviousArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",
    onClick: () => onPageChange(currentPage - 1),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Previous page", "woo-gutenberg-products-block"),
    disabled: currentPage <= 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Previous page", "custom-product-block"))), showFirstPage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("wc-block-pagination-page", "wc-block-components-pagination__page", {
      "wc-block-pagination-page--active": currentPage === 1,
      "wc-block-components-pagination__page--active": currentPage === 1
    }),
    onClick: () => onPageChange(1),
    disabled: currentPage === 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Page", "custom-product-block"))), showFirstPageEllipsis && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis",
    "aria-hidden": "true"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("…", "woo-gutenberg-products-block")), pages.map(page => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: page,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("wc-block-pagination-page", "wc-block-components-pagination__page", {
        "wc-block-pagination-page--active": currentPage === page,
        "wc-block-components-pagination__page--active": currentPage === page
      }),
      onClick: currentPage === page ? undefined : () => onPageChange(page),
      disabled: currentPage === page
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Page", "custom-product-block")));
  }), showLastPageEllipsis && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis",
    "aria-hidden": "true"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("…", "woo-gutenberg-products-block")), showLastPage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("wc-block-pagination-page", "wc-block-components-pagination__page", {
      "wc-block-pagination-page--active": currentPage === totalPages,
      "wc-block-components-pagination__page--active": currentPage === totalPages
    }),
    onClick: () => onPageChange(totalPages),
    disabled: currentPage === totalPages
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Page", "custom-product-block"))), displayNextAndPreviousArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",
    onClick: () => onPageChange(currentPage + 1),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Next page", "woo-gutenberg-products-block"),
    disabled: currentPage >= totalPages
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Next Page", "custom-product-block"))));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Hello world"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hello there"));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-product-block","version":"0.1.0","title":"Custom Product Block","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"content":{"type":"string","default":"Custom Product Block"},"products":{"type":"array","default":[]},"orderBy":{"type":"string","default":"date"},"itemsPerRow":{"type":"number","default":3},"totalItems":{"type":"number","default":10},"checkboxField":{"type":"boolean","default":true},"toggleField":{"type":"boolean"}},"textdomain":"custom-product-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkfetch_json_data"] = globalThis["webpackChunkfetch_json_data"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map