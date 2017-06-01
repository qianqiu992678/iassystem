'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */
//import test1Url from '../templates/test/test1.html';
console.log('routejs');
var iasApp = angular.module('iasApp', ['ng', 'ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('TEST', {
        url: '/test',
        template: '<div ui-view></div>'
    }).state('TEST.test1', {
        url: '/test1',
        templateUrl: 'app/templates/Test/test1.html',
        controller: 'test1Ctrl'
    }).state('PMS', {
        url: '/pms',
        template: '<div ui-view></div>'
    }).state('PMS.PMSControll', {
        url: '/PMSControll',
        templateUrl: 'app/templates/PMS/PMSControll.html',
        controller: 'PMSControllCtrl'
    }).state('PMS.PMSSingleLine', {
        url: '/PMSSingleline',
        templateUrl: 'app/templates/PMS/PMSSingleLine.html',
        controller: 'PMSSingleLineCtrl'
    }).state('Cargo', {
        url: '/Cargo',
        template: '<div ui-view></div>'
    }).state('Cargo.BallastDrillW', {
        url: '/BallastDrillW',
        templateUrl: 'app/templates/Cargo/Ballast&DrillW.html',
        controller: 'BallastDrillWCtrl'
    }).state('Cargo.BaseOil', {
        url: '/BaseOil',
        templateUrl: 'app/templates/Cargo/BaseOil.html',
        controller: 'BaseOilCtrl'
    }).state('Cargo.BHS', {
        url: '/BHS',
        templateUrl: 'app/templates/Cargo/BHS.html',
        controller: 'BHSCtrl'
    }).state('Cargo.FWCargo', {
        url: '/FWCargo',
        templateUrl: 'app/templates/Cargo/FWCargo.html',
        controller: 'FWCargoCtrl'
    }).state('Cargo.FOCargo', {
        url: '/FOCargo',
        templateUrl: 'app/templates/Cargo/FOCargo.html',
        controller: 'FOCargoCtrl'
    }).state('Cargo.LFL', {
        url: '/LFL',
        templateUrl: 'app/templates/Cargo/LFL.html',
        controller: 'LFLCtrl'
    }).state('Cargo.LiquidMudBrine', {
        url: 'LiquidMudBrine',
        templateUrl: 'app/templates/Cargo/LiquidMud&Brine.html',
        controller: 'LiquidMudBrineCtrl'
    }).state('Cargo.CargoSummary', {
        url: '/CargoSummary',
        templateUrl: 'app/templates/Cargo/CargoSummary.html',
        controller: 'CargoSummaryCtrl'
    }).state('Engine', {
        url: '/Engine',
        template: '<div ui-view></div>'
    }).state('Engine.ME1', {
        url: '/ME1',
        templateUrl: 'app/templates/Engines/ME1.html',
        controller: 'ME1Ctrl'
    }).state('Engine.ME2', {
        url: '/ME2',
        templateUrl: 'app/templates/Engines/ME2.html',
        controller: 'ME2Ctrl'
    }).state('Engine.ME3', {
        url: '/ME3',
        templateUrl: 'app/templates/Engines/ME3.html',
        controller: 'ME3Ctrl'
    }).state('Engine.ME4', {
        url: '/ME4',
        templateUrl: 'app/templates/Engines/ME4.html',
        controller: 'ME4Ctrl'
    }).state('Engine.LO', {
        url: '/LO',
        templateUrl: 'app/templates/Engines/LO.html',
        controller: 'LOCtrl'
    }).state('Engine.FO', {
        url: '/FO',
        templateUrl: 'app/templates/Engines/FO.html',
        controller: 'FOCtrl'
    }).state('Propulsions', {
        url: '/Propulsions',
        template: '<div ui-view></div>'
    }).state('Propulsions.ThrusterOverview', {
        url: '/ThrusterOverview',
        templateUrl: 'app/templates/Propulsions/ThrusterOverview.html',
        controller: 'ThrusterOverviewCtrl'
    }).state('Propulsions.BowThruster1', {
        url: '/BowThruster1',
        templateUrl: 'app/templates/Propulsions/BowThruster1.html',
        controller: 'BowThruster1Ctrl'
    }).state('Propulsions.BowThruster2', {
        url: '/BowThruster2',
        templateUrl: 'app/templates/Propulsions/BowThruster2.html',
        controller: 'BowThruster2Ctrl'
    }).state('Propulsions.MainPropPS', {
        url: '/MainPropPS',
        templateUrl: 'app/templates/Propulsions/MainPropPS.html',
        controller: 'MainPropPSCtrl'
    }).state('Propulsions.MainPropSB', {
        url: '/MainPropSB',
        templateUrl: 'app/templates/Propulsions/MainPropSB.html',
        controller: 'MainPropSBCtrl'
    }).state('Cooling', {
        url: '/Cooling',
        template: '<div ui-view=""></div>'
    }).state('Cooling.CoolingOverview', {
        url: '/CoolingOverview',
        templateUrl: 'app/templates/Cooling/CoolingOverview.html',
        controller: 'CoolingOverviewCtrl'
    }).state('Cooling.SWCooling1', {
        url: '/SWCooling1',
        templateUrl: 'app/templates/Cooling/SWCooling1.html',
        controller: 'SWCooling1Ctrl'
    }).state('Cooling.SWCooling2', {
        url: '/SWCooling2',
        templateUrl: 'app/templates/Cooling/SWCooling2.html',
        controller: 'SWCooling2Ctrl'
    }).state('Cooling.FWCooling1', {
        url: '/FWCooling1',
        templateUrl: 'app/templates/Cooling/FWCooling1.html',
        controller: 'FWCooling1Ctrl'
    }).state('Cooling.FWCooling2', {
        url: '/FWCooling2',
        templateUrl: 'app/templates/Cooling/FWCooling2.html',
        controller: 'FWCooling2Ctrl'
    }).state('Cooling.FWCooling3', {
        url: '/FWCooling3',
        templateUrl: 'app/templates/Cooling/FWCooling3.html',
        controller: 'FWCooling3Ctrl'
    }).state('Misc', {
        url: '/Misc',
        template: '<div ui-view></div>'
    }).state('Misc.ExtendedAlarm', {
        url: '/ExtendedAlarm',
        templateUrl: 'app/templates/Misc/ExtendedAlarm.html',
        controller: 'ExtendedAlarmCtrl'
    }).state('Misc.RunningHours', {
        url: '/RunningHours',
        templateUrl: 'app/templates/Misc/RunningHours.html',
        controller: 'RunningHoursCtrl'
    }).state('Misc.Miscellaneous', {
        url: '/Miscellaneous',
        templateUrl: 'app/templates/Misc/Miscellaneous.html',
        controller: 'MiscellaneousCtrl'
    }).state('Misc.EITrqOverview', {
        url: '/EITrqOverview',
        templateUrl: 'app/templates/Misc/EITrqOverview.html',
        controller: 'EITrqOverviewCtrl'
    }).state('Misc.Bilge', {
        url: '/Bilge',
        templateUrl: 'app/templates/Misc/Bilge.html',
        controller: 'BilgeCtrl'
    }).state('Misc.FireLine', {
        url: '/FireLine',
        templateUrl: 'app/templates/Misc/FireLine.html',
        controller: 'FireLineCtrl'
    }).state('Misc.WasteSludge', {
        url: '/WasteSludge',
        templateUrl: 'app/templates/Misc/WasteSludge.html',
        controller: 'WasteSludgeCtrl'
    }).state('Misc.Hydrophore', {
        url: '/Hydrophore',
        templateUrl: 'app/templates/Misc/Hydrophore.html',
        controller: 'HydrophoreCtrl'
    }).state('Misc.SewageDischarge', {
        url: '/SewageDischarge',
        templateUrl: 'app/templates/Misc/SewageDischarge.html',
        controller: 'SewageDischargeCtrl'
    }).state('Misc.StartingInstrAir', {
        url: '/StartingInstrAir',
        templateUrl: 'app/templates/Misc/StartingInstrAir.html',
        controller: 'StartingInstrAirCtrl'
    }).state('Misc.StabtankLevel', {
        url: '/StabtankLevel',
        templateUrl: 'app/templates/Misc/StabtankLevel.html',
        controller: 'StabtankLevelCtrl'
    }).state('Trend', {
        url: '/Trend',
        template: '<div ui-view></div>'
    }).state('Trend.Trend', {
        url: '/Trend',
        templateUrl: 'app/templates/Trend/Trend.html',
        controller: 'Trend.html'
    }).state('IAS', {
        url: '/IAS',
        template: '<div ui-view></div>'
    }).state('IAS.IASLogin', {
        url: '/IASLogin',
        templateUrl: 'app/templates/IAS/IASLogin.html',
        controller: 'IASLoginCtrl'
    }).state('IAS.IOBrowser', {
        url: '/IOBrowser',
        templateUrl: 'app/templates/IAS/IOBrowser.html',
        controller: 'IOBrowserCtrl'
    }).state('IAS.ComNetwork', {
        url: '/ComNetwork',
        templateUrl: 'app/templates/IAS/ComNetwork.html',
        controller: 'ComNetworkCtrl'
    }).state('IAS.ComDevice', {
        url: '/ComDevice',
        templateUrl: 'app/templates/IAS/ComDevice.html',
        controller: 'ComDeviceCtrl'
    }).state('IAS.ECIVRNODX', {
        url: '/ECIVRNODX',
        templateUrl: 'app/templates/IAS/ECIVRNODX.html',
        controller: 'ECIVRNODXCtrl'
    }).state('IAS.NMEA', {
        url: '/NMEA',
        templateUrl: 'app/templates/IAS/NMEA.html',
        controller: 'NMEACtrl'
    }).state('IAS.CommandOverview', {
        url: '/CommandOverview',
        templateUrl: 'app/templates/IAS/CommandOverview.html',
        controller: 'CommandOverviewCtrl'
    }).state('IAS.CommandManagement', {
        url: '/CommandManagement',
        templateUrl: 'app/templates/IAS/CommandManagement.html',
        controller: 'CommandManagementCtrl'
    }).state('IAS.IASSetup', {
        url: '/IASSetup',
        templateUrl: 'app/templates/IAS/IASSetup.html',
        controller: 'IASSetupCtrl'
    }).state('IAS.WriteDisable', {
        url: '/WriteDisable',
        templateUrl: 'app/templates/IAS/WriteDisable.html',
        controller: 'WriteDisableCtrl'
    }).state('IAS.DiagnosticPerformance', {
        url: '/DiagnosticPerformance',
        templateUrl: 'app/templates/IAS/DiagnosticPerformance.html',
        controller: 'DiagnosticPerformanceCtrl'
    }).state('IAS.ForceBrowser', {
        url: '/ForceBrowser',
        templateUrl: 'app/templates/IAS/ForceBrowser.html',
        controller: 'ForceBrowser'
    }).state('IAS.TaskOverview', {
        url: '/TaskOverview',
        templateUrl: 'app/templates/IAS/TaskOverview.html',
        controller: 'TaskOverview'
    });
}]);