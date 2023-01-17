"use strict";
(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_forms_forms_module_ts"],{

/***/ 71366:
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormModule": () => (/* binding */ FormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms-routing.module */ 91909);
/* harmony import */ var _editors_editors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editors/editors.component */ 90176);
/* harmony import */ var _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-examples/form-examples.component */ 1201);
/* harmony import */ var _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-validations/form-validations.component */ 30415);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard/wizard.component */ 57929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-controls/form-controls.component */ 85457);
/* harmony import */ var _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advance-controls/advance-controls.component */ 77220);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-color-picker */ 18251);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ 37526);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);





































class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__.MatSidenavModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__.MatStepperModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__.OwlNativeDateTimeModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule,
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__.ColorPickerModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_36__.MaterialFileInputModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_editors_editors_component__WEBPACK_IMPORTED_MODULE_1__.EditorsComponent,
        _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_2__.FormExamplesComponent,
        _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_3__.FormValidationsComponent,
        _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__.WizardComponent,
        _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_5__.FormControlsComponent,
        _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_6__.AdvanceControlsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__.MatStepperModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__.OwlDateTimeModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__.OwlNativeDateTimeModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__.ColorPickerModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_36__.MaterialFileInputModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_forms_forms_module_ts.js.map