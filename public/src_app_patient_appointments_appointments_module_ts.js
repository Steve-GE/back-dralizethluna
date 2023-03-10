"use strict";
(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_patient_appointments_appointments_module_ts"],{

/***/ 33303:
/*!*********************************************************************!*\
  !*** ./src/app/patient/appointments/appointments-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsRoutingModule": () => (/* binding */ AppointmentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ 1991);
/* harmony import */ var _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upcoming-appointment/upcoming-appointment.component */ 95801);
/* harmony import */ var _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-appointment/past-appointment.component */ 12525);
/* harmony import */ var _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today-appointment/today-appointment.component */ 50449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: "today",
        component: _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_3__.TodayAppointmentComponent,
    },
    {
        path: "upcoming",
        component: _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_1__.UpcomingAppointmentComponent,
    },
    {
        path: "past",
        component: _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_2__.PastAppointmentComponent,
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class AppointmentsRoutingModule {
}
AppointmentsRoutingModule.??fac = function AppointmentsRoutingModule_Factory(t) { return new (t || AppointmentsRoutingModule)(); };
AppointmentsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AppointmentsRoutingModule });
AppointmentsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppointmentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 9703:
/*!*************************************************************!*\
  !*** ./src/app/patient/appointments/appointments.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsModule": () => (/* binding */ AppointmentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointments-routing.module */ 33303);
/* harmony import */ var _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upcoming-appointment/upcoming-appointment.component */ 95801);
/* harmony import */ var _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming-appointment/dialogs/delete/delete.component */ 61312);
/* harmony import */ var _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcoming-appointment/dialogs/form-dialog/form-dialog.component */ 71616);
/* harmony import */ var _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./past-appointment/past-appointment.component */ 12525);
/* harmony import */ var _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./past-appointment/dialogs/delete/delete.component */ 66935);
/* harmony import */ var _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today-appointment/today-appointment.component */ 50449);
/* harmony import */ var _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./today-appointment/dialogs/delete/delete.component */ 75417);
/* harmony import */ var _upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upcoming-appointment/upcoming-appointment.service */ 54465);
/* harmony import */ var _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./past-appointment/past-appointment.service */ 4490);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
































class AppointmentsModule {
}
AppointmentsModule.??fac = function AppointmentsModule_Factory(t) { return new (t || AppointmentsModule)(); };
AppointmentsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: AppointmentsModule });
AppointmentsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ providers: [_upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_8__.UpcomingAppointmentService, _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_9__.PastAppointmentService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.NgxDatatableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckboxModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__.MatToolbarModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_30__.MaterialFileInputModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_10__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](AppointmentsModule, { declarations: [_upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_1__.UpcomingAppointmentComponent,
        _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent,
        _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FormDialogComponent,
        _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_4__.PastAppointmentComponent,
        _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__.PastDeleteDialogComponent,
        _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_6__.TodayAppointmentComponent,
        _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__.DeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.NgxDatatableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckboxModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__.MatToolbarModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_30__.MaterialFileInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_10__.ComponentsModule] }); })();


/***/ }),

/***/ 66935:
/*!******************************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/dialogs/delete/delete.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastDeleteDialogComponent": () => (/* binding */ PastDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _past_appointment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../past-appointment.service */ 4490);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);





class PastDeleteDialogComponent {
    constructor(dialogRef, data, appointmentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.appointmentService = appointmentService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.appointmentService.deletePastAppointment(this.data.id);
    }
}
PastDeleteDialogComponent.??fac = function PastDeleteDialogComponent_Factory(t) { return new (t || PastDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_past_appointment_service__WEBPACK_IMPORTED_MODULE_0__.PastAppointmentService)); };
PastDeleteDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PastDeleteDialogComponent, selectors: [["app-delete"]], decls: 25, vars: 4, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]], template: function PastDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2)(4, "ul", 3)(5, "li")(6, "p")(7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li")(11, "p")(12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li")(16, "p")(17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5)(21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PastDeleteDialogComponent_Template_button_click_21_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PastDeleteDialogComponent_Template_button_click_23_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.doctor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 12525:
/*!*************************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/past-appointment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastAppointmentComponent": () => (/* binding */ PastAppointmentComponent),
/* harmony export */   "ExampleDataSource": () => (/* binding */ ExampleDataSource)
/* harmony export */ });
/* harmony import */ var _past_appointment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./past-appointment.service */ 4490);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ 66935);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
























const _c0 = ["filter"];
function PastAppointmentComponent_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 47)(1, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function PastAppointmentComponent_mat_header_cell_31_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return $event ? ctx_r27.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function PastAppointmentComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 47)(1, "mat-checkbox", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PastAppointmentComponent_mat_cell_32_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PastAppointmentComponent_mat_cell_32_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r32); const row_r29 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return $event ? ctx_r31.selection.toggle(row_r29) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx_r3.selection.isSelected(row_r29))("ngClass", "tbl-checkbox");
} }
function PastAppointmentComponent_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](row_r33.id);
} }
function PastAppointmentComponent_mat_header_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", "tbl-col-width-per-5");
} }
function PastAppointmentComponent_mat_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("src", row_r34.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
} }
function PastAppointmentComponent_mat_header_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Doctor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r35.doctor, "");
} }
function PastAppointmentComponent_mat_header_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r36.email, "");
} }
function PastAppointmentComponent_mat_header_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Appo. Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, row_r37.date, "MM/dd/yyyy"), " ");
} }
function PastAppointmentComponent_mat_header_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Appo. Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r38.time, "");
} }
function PastAppointmentComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r39.mobile, "");
} }
function PastAppointmentComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Injury/Condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r40.injury, "");
} }
function PastAppointmentComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PastAppointmentComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 54)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PastAppointmentComponent_mat_cell_59_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function PastAppointmentComponent_mat_cell_59_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r45); const i_r42 = restoredCtx.index; const row_r41 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r44.deleteItem(i_r42, row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
} }
function PastAppointmentComponent_mat_header_row_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "mat-header-row");
} }
function PastAppointmentComponent_mat_row_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "mat-row", 57);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????styleProp"]("cursor", "pointer");
} }
function PastAppointmentComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "mat-progress-spinner", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("diameter", 40);
} }
function PastAppointmentComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????styleProp"]("display", ctx_r25.dataSource.renderedData.length == 0 ? "" : "none");
} }
const _c1 = function () { return ["Appointments"]; };
const _c2 = function () { return [5, 10, 25, 100]; };
class PastAppointmentComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_2__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient, dialog, appointmentService, snackBar) {
        super();
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.appointmentService = appointmentService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "doctor",
            "date",
            "time",
            "email",
            "mobile",
            "injury",
            "actions",
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.renderedData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        const totalSelect = this.selection.selected.length;
        this.selection.selected.forEach((item) => {
            const index = this.dataSource.renderedData.findIndex((d) => d === item);
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            this.exampleDatabase.dataChange.value.splice(index, 1);
            this.refreshTable();
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        });
        this.showNotification("snackbar-danger", totalSelect + " Record Delete Successfully...!!!", "bottom", "center");
    }
    deleteItem(i, row) {
        this.index = i;
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_1__.PastDeleteDialogComponent, {
            data: row,
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    loadData() {
        this.exampleDatabase = new _past_appointment_service__WEBPACK_IMPORTED_MODULE_0__.PastAppointmentService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.filter.nativeElement, "keyup").subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, "", {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
}
PastAppointmentComponent.??fac = function PastAppointmentComponent_Factory(t) { return new (t || PastAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_past_appointment_service__WEBPACK_IMPORTED_MODULE_0__.PastAppointmentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
PastAppointmentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: PastAppointmentComponent, selectors: [["app-past-appointment"]], viewQuery: function PastAppointmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.filter = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????ProvidersFeature"]([{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE, useValue: "en-GB" }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 66, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "doctor"], ["matColumnDef", "email"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "mobile"], ["matColumnDef", "injury"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-5"], [3, "src"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", ""], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]], template: function PastAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 4)(11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "h2")(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "Past Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PastAppointmentComponent_Template_button_click_25_listener() { return ctx.removeSelectedRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "mat-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](31, PastAppointmentComponent_mat_header_cell_31_Template, 2, 4, "mat-header-cell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](32, PastAppointmentComponent_mat_cell_32_Template, 2, 3, "mat-cell", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](33, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](34, PastAppointmentComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](35, PastAppointmentComponent_mat_cell_35_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](36, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](37, PastAppointmentComponent_mat_header_cell_37_Template, 2, 1, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](38, PastAppointmentComponent_mat_cell_38_Template, 2, 1, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](39, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](40, PastAppointmentComponent_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](41, PastAppointmentComponent_mat_cell_41_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](42, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](43, PastAppointmentComponent_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](44, PastAppointmentComponent_mat_cell_44_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](45, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](46, PastAppointmentComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](47, PastAppointmentComponent_mat_cell_47_Template, 3, 4, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](48, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](49, PastAppointmentComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](50, PastAppointmentComponent_mat_cell_50_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](51, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](52, PastAppointmentComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](53, PastAppointmentComponent_mat_cell_53_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](54, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](55, PastAppointmentComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](56, PastAppointmentComponent_mat_cell_56_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](57, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](58, PastAppointmentComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](59, PastAppointmentComponent_mat_cell_59_Template, 4, 0, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](60, PastAppointmentComponent_mat_header_row_60_Template, 1, 0, "mat-header-row", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](61, PastAppointmentComponent_mat_row_61_Template, 1, 2, "mat-row", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](62, PastAppointmentComponent_div_62_Template, 2, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](63, PastAppointmentComponent_div_63_Template, 2, 2, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](64, "mat-paginator", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("title", "Past")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](13, _c1))("active_item", "Past Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("hidden", !ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](14, _c2));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXN0LWFwcG9pbnRtZW50LmNvbXBvbmVudC5zYXNzIn0= */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject("");
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this.exampleDatabase.dataChange,
            this._sort.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.exampleDatabase.getAllPastAppointment();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((appointment) => {
                const searchStr = (appointment.email +
                    appointment.date +
                    appointment.time +
                    appointment.doctor +
                    appointment.injury +
                    appointment.mobile).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === "") {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = "";
            let propertyB = "";
            switch (this._sort.active) {
                case "id":
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case "doctor":
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case "email":
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case "date":
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
                case "time":
                    [propertyA, propertyB] = [a.time, b.time];
                    break;
                case "mobile":
                    [propertyA, propertyB] = [a.mobile, b.mobile];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 4490:
/*!***********************************************************************************!*\
  !*** ./src/app/patient/appointments/past-appointment/past-appointment.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastAppointmentService": () => (/* binding */ PastAppointmentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class PastAppointmentService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.API_URL = "assets/data/past-appointment.json";
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllPastAppointment() {
        this.subs.sink = this.httpClient
            .get(this.API_URL)
            .subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addPastAppointment(appointment) {
        this.dialogData = appointment;
        /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
          this.dialogData = appointment;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updatePastAppointment(appointment) {
        this.dialogData = appointment;
        /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
          this.dialogData = appointment;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deletePastAppointment(id) {
        console.log(id);
        /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
          console.log(id);
          },
          (err: HttpErrorResponse) => {
             // error code here
          }
        );*/
    }
}
PastAppointmentService.??fac = function PastAppointmentService_Factory(t) { return new (t || PastAppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PastAppointmentService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: PastAppointmentService, factory: PastAppointmentService.??fac });


/***/ }),

/***/ 75417:
/*!*******************************************************************************************!*\
  !*** ./src/app/patient/appointments/today-appointment/dialogs/delete/delete.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteComponent": () => (/* binding */ DeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DeleteComponent {
    constructor() { }
    ngOnInit() { }
}
DeleteComponent.??fac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(); };
DeleteComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteComponent, selectors: [["app-delete"]], decls: 2, vars: 0, template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "delete works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 50449:
/*!***************************************************************************************!*\
  !*** ./src/app/patient/appointments/today-appointment/today-appointment.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayAppointmentComponent": () => (/* binding */ TodayAppointmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);




const _c0 = function () { return ["Appointments"]; };
class TodayAppointmentComponent {
    constructor() { }
    ngOnInit() { }
}
TodayAppointmentComponent.??fac = function TodayAppointmentComponent_Factory(t) { return new (t || TodayAppointmentComponent)(); };
TodayAppointmentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TodayAppointmentComponent, selectors: [["app-today-appointment"]], decls: 292, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "body"], [1, "list-unstyled", "user-progress", "list-unstyled-border", "list-unstyled-noborder"], [1, "app-list"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig1.jpg", 1, "msr-3", "rounded-circle"], [1, "set-flex"], [1, "media-title", "font-16"], [1, "text-job", "text-muted", "mb-0"], [1, "media-title", "text-muted", "mb-0"], [1, "text-job", "font-16"], [1, "col-green"], [1, "media-cta"], ["mat-icon-button", "", 1, "btn-tbl-confirm"], ["mat-icon-button", "", 1, "btn-tbl-reject"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig2.jpg", 1, "msr-3", "rounded-circle"], [1, "col-red"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig3.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig4.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig6.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig7.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig8.jpg", 1, "msr-3", "rounded-circle"], [1, "col-orange"]], template: function TodayAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Today's Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 8)(11, "ul", 9)(12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Dr.Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Radiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "09:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 12)(25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "CT scans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 12)(30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "+123 676545655");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 12)(35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 12)(40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Grand Plains Clinic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 18)(45, "td")(46, "button", 19)(47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "button", 20)(50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 12)(55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Dr.John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Cardiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 12)(60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "11:00-11:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 12)(65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "heart checkup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 12)(70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "+123 434656764");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 12)(75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 12)(80, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Genesis Hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 18)(85, "td")(86, "button", 19)(87, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "button", 20)(90, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](93, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 12)(95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Dr.Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Otolaryngologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 12)(100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "09:15-10:15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 12)(105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Diseases Of The Ear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 12)(110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "+123 45345673");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 12)(115, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 12)(120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Genesis Laboratory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 18)(125, "td")(126, "button", 19)(127, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "button", 20)(130, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](133, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 12)(135, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Dr.Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Dentist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 12)(140, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "div", 12)(145, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "Root Canal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 12)(150, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "+123 87654533");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 12)(155, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 12)(160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "Clemency Hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 18)(165, "td")(166, "button", 19)(167, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "button", 20)(170, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](173, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "div", 12)(175, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "Dr.Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, "Endocrinologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "div", 12)(180, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "04:00-05:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 12)(185, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "Diabetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "div", 12)(190, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "+123 45678345");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "div", 12)(195, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 12)(200, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Hopevale Clinic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "div", 18)(205, "td")(206, "button", 19)(207, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "button", 20)(210, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](213, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "div", 12)(215, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "Dr.Jamie Blair");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Radiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "div", 12)(220, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "05:00-05:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 12)(225, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "Diabetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 12)(230, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "+123 45678345");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 12)(235, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 12)(240, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Pinevale Medical Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "div", 18)(245, "td")(246, "button", 19)(247, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "button", 20)(250, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](253, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 12)(255, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Dr.Nikki Barton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Endocrinologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 12)(260, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "06:00-07:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "div", 12)(265, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "X-Ray");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 12)(270, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, "+123 45678345");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "div", 12)(275, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 12)(280, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](281, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, "Hopevale Clinic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "div", 18)(285, "td")(286, "button", 19)(287, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](288, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "button", 20)(290, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Today")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Today");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RheS1hcHBvaW50bWVudC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 61312:
/*!**********************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../upcoming-appointment.service */ 54465);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);





class DeleteDialogComponent {
    constructor(dialogRef, data, appointmentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.appointmentService = appointmentService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.appointmentService.deleteUpcomingAppointment(this.data.id);
    }
}
DeleteDialogComponent.??fac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_0__.UpcomingAppointmentService)); };
DeleteDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete"]], decls: 25, vars: 4, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2)(4, "ul", 3)(5, "li")(6, "p")(7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li")(11, "p")(12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li")(16, "p")(17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5)(21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteDialogComponent_Template_button_click_21_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteDialogComponent_Template_button_click_23_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.doctor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 71616:
/*!********************************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/form-dialog/form-dialog.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": () => (/* binding */ FormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _upcoming_appointment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../upcoming-appointment.model */ 71941);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../upcoming-appointment.service */ 54465);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);

















function FormDialogComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Doctor Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please select time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Mobile is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class FormDialogComponent {
    constructor(dialogRef, data, appointmentService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.appointmentService = appointmentService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === "edit") {
            console.log(data.appointment.date);
            this.dialogTitle = data.appointment.doctor;
            this.appointment = data.appointment;
        }
        else {
            this.dialogTitle = "New Appointment";
            this.appointment = new _upcoming_appointment_model__WEBPACK_IMPORTED_MODULE_0__.UpcomingAppointment({});
        }
        this.appointmentForm = this.createContactForm();
    }
    getErrorMessage() {
        return this.formControl.hasError("required")
            ? "Required field"
            : this.formControl.hasError("email")
                ? "Not a valid email"
                : "";
    }
    createContactForm() {
        return this.fb.group({
            id: [this.appointment.id],
            img: [this.appointment.img],
            email: [
                this.appointment.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)],
            ],
            date: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.appointment.date, "yyyy-MM-dd", "en"),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ],
            time: [this.appointment.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            mobile: [this.appointment.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            doctor: [this.appointment.doctor, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            injury: [this.appointment.injury],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.appointmentService.addUpcomingAppointment(this.appointmentForm.getRawValue());
    }
}
FormDialogComponent.??fac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_1__.UpcomingAppointmentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE, useValue: "en-GB" }])], decls: 80, vars: 19, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "msl-3", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "doctor", "required", ""], [3, "value"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "time", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "injury"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8)(12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_12_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 10)(14, "div", 11)(15, "mat-form-field", 12)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Doctor Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-select", 13)(19, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, " Dr.Rajesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, " Dr.Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, " Dr.Jay Soni ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, " Dr.Pooja Patel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, " Dr.Jamie Blair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](31, FormDialogComponent_mat_error_31_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 11)(33, "mat-form-field", 12)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](39, FormDialogComponent_mat_error_39_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 10)(41, "div", 11)(42, "mat-form-field", 12)(43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "input", 18)(46, "mat-datepicker-toggle", 19)(47, "mat-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](49, FormDialogComponent_mat_error_49_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 11)(51, "mat-form-field", 12)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](56, "access_time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](57, FormDialogComponent_mat_error_57_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 10)(59, "div", 11)(60, "mat-form-field", 12)(61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](66, FormDialogComponent_mat_error_66_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 10)(68, "div", 23)(69, "mat-form-field", 12)(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, "Injury/Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "div", 10)(74, "div", 23)(75, "div", 25)(76, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_76_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_78_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](79, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx.appointment.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.dialogTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.appointmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "Dr.Rajesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "Dr.Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "Dr.Jay Soni");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "Dr.Pooja Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", " Dr.Jamie Blair");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.appointmentForm.get("doctor").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.appointmentForm.get("email").hasError("required") || ctx.appointmentForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.appointmentForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.appointmentForm.get("time").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.appointmentForm.get("mobile").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("type", ctx.submit)("disabled", !ctx.appointmentForm.valid)("mat-dialog-close", 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 95801:
/*!*********************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingAppointmentComponent": () => (/* binding */ UpcomingAppointmentComponent),
/* harmony export */   "ExampleDataSource": () => (/* binding */ ExampleDataSource)
/* harmony export */ });
/* harmony import */ var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upcoming-appointment.service */ 54465);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 71616);
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ 61312);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);

























const _c0 = ["filter"];
function UpcomingAppointmentComponent_mat_header_cell_43_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 51)(1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function UpcomingAppointmentComponent_mat_header_cell_43_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return $event ? ctx_r27.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function UpcomingAppointmentComponent_mat_cell_44_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 51)(1, "mat-checkbox", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_mat_cell_44_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function UpcomingAppointmentComponent_mat_cell_44_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r32); const row_r29 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return $event ? ctx_r31.selection.toggle(row_r29) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", ctx_r3.selection.isSelected(row_r29))("ngClass", "tbl-checkbox");
} }
function UpcomingAppointmentComponent_mat_header_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](row_r33.id);
} }
function UpcomingAppointmentComponent_mat_header_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-5");
} }
function UpcomingAppointmentComponent_mat_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("src", row_r34.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);
} }
function UpcomingAppointmentComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Doctor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r35.doctor, "");
} }
function UpcomingAppointmentComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r36.email, "");
} }
function UpcomingAppointmentComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Appo. Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](2, 1, row_r37.date, "MM/dd/yyyy"), " ");
} }
function UpcomingAppointmentComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Appo. Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r38.time, "");
} }
function UpcomingAppointmentComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r39.mobile, "");
} }
function UpcomingAppointmentComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Injury/Condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r40.injury, "");
} }
function UpcomingAppointmentComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function UpcomingAppointmentComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_mat_cell_71_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function UpcomingAppointmentComponent_mat_cell_71_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r45); const row_r41 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r44.editCall(row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_mat_cell_71_Template_button_click_4_listener($event) { return $event.stopPropagation(); })("click", function UpcomingAppointmentComponent_mat_cell_71_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r45); const i_r42 = restoredCtx.index; const row_r41 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r47.deleteItem(i_r42, row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()()();
} }
function UpcomingAppointmentComponent_mat_header_row_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "mat-header-row");
} }
function UpcomingAppointmentComponent_mat_row_73_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_mat_row_73_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const row_r48 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r49.editCall(row_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("cursor", "pointer");
} }
function UpcomingAppointmentComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "mat-progress-spinner", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("diameter", 40);
} }
function UpcomingAppointmentComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("display", ctx_r25.dataSource.renderedData.length == 0 ? "" : "none");
} }
const _c1 = function () { return ["Appointments"]; };
const _c2 = function () { return [5, 10, 25, 100]; };
class UpcomingAppointmentComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient, dialog, appointmentService, snackBar) {
        super();
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.appointmentService = appointmentService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            "select",
            "img",
            "doctor",
            "date",
            "time",
            "email",
            "mobile",
            "injury",
            "actions",
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.renderedData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        const totalSelect = this.selection.selected.length;
        this.selection.selected.forEach((item) => {
            const index = this.dataSource.renderedData.findIndex((d) => d === item);
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            this.exampleDatabase.dataChange.value.splice(index, 1);
            this.refreshTable();
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
        });
        this.showNotification("snackbar-danger", totalSelect + " Record Delete Successfully...!!!", "bottom", "center");
    }
    addNew() {
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                appointment: this.appointment,
                action: "add",
            },
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.unshift(this.appointmentService.getDialogData());
                this.refreshTable();
                this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    editCall(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                appointment: row,
                action: "edit",
            },
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                this.exampleDatabase.dataChange.value[foundIndex] =
                    this.appointmentService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification("black", "Edit Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    deleteItem(i, row) {
        this.index = i;
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
            data: row,
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    loadData() {
        this.exampleDatabase = new _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_0__.UpcomingAppointmentService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.filter.nativeElement, "keyup").subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, "", {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
}
UpcomingAppointmentComponent.??fac = function UpcomingAppointmentComponent_Factory(t) { return new (t || UpcomingAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_0__.UpcomingAppointmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
UpcomingAppointmentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: UpcomingAppointmentComponent, selectors: [["app-upcoming-appointment"]], viewQuery: function UpcomingAppointmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.filter = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????ProvidersFeature"]([{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE, useValue: "en-GB" }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????InheritDefinitionFeature"]], decls: 78, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "doctor"], ["matColumnDef", "email"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "mobile"], ["matColumnDef", "injury"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-5"], [3, "src"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]], template: function UpcomingAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 4)(11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "h2")(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, "Upcoming Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_Template_button_click_25_listener() { return ctx.removeSelectedRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 21)(29, "ul", 22)(30, "li")(31, "div", 23)(32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_Template_button_click_32_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](34, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "li")(36, "div", 23)(37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UpcomingAppointmentComponent_Template_button_click_37_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](39, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "mat-table", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](42, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, UpcomingAppointmentComponent_mat_header_cell_43_Template, 2, 4, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](44, UpcomingAppointmentComponent_mat_cell_44_Template, 2, 3, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, UpcomingAppointmentComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](47, UpcomingAppointmentComponent_mat_cell_47_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](48, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](49, UpcomingAppointmentComponent_mat_header_cell_49_Template, 2, 1, "mat-header-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](50, UpcomingAppointmentComponent_mat_cell_50_Template, 2, 1, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](51, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](52, UpcomingAppointmentComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](53, UpcomingAppointmentComponent_mat_cell_53_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](54, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](55, UpcomingAppointmentComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](56, UpcomingAppointmentComponent_mat_cell_56_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](57, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](58, UpcomingAppointmentComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](59, UpcomingAppointmentComponent_mat_cell_59_Template, 3, 4, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](60, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](61, UpcomingAppointmentComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](62, UpcomingAppointmentComponent_mat_cell_62_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](63, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](64, UpcomingAppointmentComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](65, UpcomingAppointmentComponent_mat_cell_65_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](66, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](67, UpcomingAppointmentComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](68, UpcomingAppointmentComponent_mat_cell_68_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](69, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](70, UpcomingAppointmentComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](71, UpcomingAppointmentComponent_mat_cell_71_Template, 7, 0, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](72, UpcomingAppointmentComponent_mat_header_row_72_Template, 1, 0, "mat-header-row", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](73, UpcomingAppointmentComponent_mat_row_73_Template, 1, 2, "mat-row", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](74, UpcomingAppointmentComponent_div_74_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](75, UpcomingAppointmentComponent_div_75_Template, 2, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](76, "mat-paginator", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("title", "Upcoming")("items", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](13, _c1))("active_item", "Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("hidden", !ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](14, _c2));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGNvbWluZy1hcHBvaW50bWVudC5jb21wb25lbnQuc2FzcyJ9 */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.DataSource {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject("");
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this.exampleDatabase.dataChange,
            this._sort.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.exampleDatabase.getAllUpcomingAppointment();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((appointment) => {
                const searchStr = (appointment.email +
                    appointment.date +
                    appointment.time +
                    appointment.doctor +
                    appointment.injury +
                    appointment.mobile).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === "") {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = "";
            let propertyB = "";
            switch (this._sort.active) {
                case "id":
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case "doctor":
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case "email":
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case "date":
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
                case "time":
                    [propertyA, propertyB] = [a.time, b.time];
                    break;
                case "mobile":
                    [propertyA, propertyB] = [a.mobile, b.mobile];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 71941:
/*!*****************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingAppointment": () => (/* binding */ UpcomingAppointment)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);

class UpcomingAppointment {
    constructor(appointment) {
        {
            this.id = appointment.id || this.getRandomID();
            this.img = appointment.avatar || "assets/images/user/user1.png";
            this.name = appointment.name || "";
            this.email = appointment.email || "";
            this.gender = appointment.gender || "male";
            this.date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), "yyyy-MM-dd", "en") || "";
            this.time = appointment.time || "";
            this.mobile = appointment.mobile || "";
            this.doctor = appointment.mobile || "";
            this.injury = appointment.mobile || "";
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ 54465:
/*!*******************************************************************************************!*\
  !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingAppointmentService": () => (/* binding */ UpcomingAppointmentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class UpcomingAppointmentService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.API_URL = "assets/data/upcoming-appointment.json";
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllUpcomingAppointment() {
        this.subs.sink = this.httpClient
            .get(this.API_URL)
            .subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + " " + error.message);
        });
    }
    addUpcomingAppointment(appointment) {
        this.dialogData = appointment;
        /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
          this.dialogData = appointment;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateUpcomingAppointment(appointment) {
        this.dialogData = appointment;
        /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
          this.dialogData = appointment;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteUpcomingAppointment(id) {
        console.log(id);
        /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
          console.log(id);
          },
          (err: HttpErrorResponse) => {
             // error code here
          }
        );*/
    }
}
UpcomingAppointmentService.??fac = function UpcomingAppointmentService_Factory(t) { return new (t || UpcomingAppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UpcomingAppointmentService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: UpcomingAppointmentService, factory: UpcomingAppointmentService.??fac });


/***/ }),

/***/ 19946:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/toolbar.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": () => (/* binding */ MatToolbar),
/* harmony export */   "MatToolbarModule": () => (/* binding */ MatToolbarModule),
/* harmony export */   "MatToolbarRow": () => (/* binding */ MatToolbarRow),
/* harmony export */   "throwToolbarMixedModesError": () => (/* binding */ throwToolbarMixedModesError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);




 // Boilerplate for applying mixins to MatToolbar.

/** @docs-private */

const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];

const _MatToolbarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

});

class MatToolbarRow {}

MatToolbarRow.??fac = function MatToolbarRow_Factory(t) {
  return new (t || MatToolbarRow)();
};

MatToolbarRow.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
  type: MatToolbarRow,
  selectors: [["mat-toolbar-row"]],
  hostAttrs: [1, "mat-toolbar-row"],
  exportAs: ["matToolbarRow"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatToolbarRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'mat-toolbar-row',
      exportAs: 'matToolbarRow',
      host: {
        'class': 'mat-toolbar-row'
      }
    }]
  }], null, null);
})();

class MatToolbar extends _MatToolbarBase {
  constructor(elementRef, _platform, document) {
    super(elementRef);
    this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

    this._document = document;
  }

  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();

      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */


  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      // Check if there are any other DOM nodes that can display content but aren't inside of
      // a <mat-toolbar-row> element.
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains('mat-toolbar-row'))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !!(node.textContent && node.textContent.trim()));

      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }

}

MatToolbar.??fac = function MatToolbar_Factory(t) {
  return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
};

MatToolbar.??cmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: MatToolbar,
  selectors: [["mat-toolbar"]],
  contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, MatToolbarRow, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx._toolbarRows = _t);
    }
  },
  hostAttrs: [1, "mat-toolbar"],
  hostVars: 4,
  hostBindings: function MatToolbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matToolbar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????InheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatToolbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](1, 1);
    }
  },
  styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatToolbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-toolbar',
      exportAs: 'matToolbar',
      inputs: ['color'],
      host: {
        'class': 'mat-toolbar',
        '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
        '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, {
    _toolbarRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */


function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatToolbarModule {}

MatToolbarModule.??fac = function MatToolbarModule_Factory(t) {
  return new (t || MatToolbarModule)();
};

MatToolbarModule.??mod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
  type: MatToolbarModule
});
MatToolbarModule.??inj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatToolbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatToolbar, MatToolbarRow]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_patient_appointments_appointments_module_ts.js.map