"use strict";
(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_tables_tables_module_ts"],{

/***/ 81439:
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-routing.module */ 59177);
/* harmony import */ var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-table/basic-table.component */ 16157);
/* harmony import */ var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-datatable/ngx-datatable.component */ 99961);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-table/material-table.component */ 51229);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);



















class TablesModule {
}
TablesModule.ɵfac = function TablesModule_Factory(t) { return new (t || TablesModule)(); };
TablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TablesModule });
TablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TablesModule, { declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableComponent,
        _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__.NgxDatatableComponent,
        _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_tables_tables_module_ts.js.map