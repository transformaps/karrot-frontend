import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import pickupDate from "../../../../services/pickupDate/pickupDate";
import pickupManageComponent from "./pickupManage.component";
import createPickup from "../../_pickupList/_createPickup/createPickup";

let pickupManageModule = angular.module("pickupManage", [
  uiRouter,
  ngMaterial,
  pickupDate,
  createPickup
])

.component("pickupManage", pickupManageComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state("pickupManage", {
      url: "/manage",
      parent: "group.store",
      component: "pickupManage",
      resolve: {
        series: (PickupDateSeries, $stateParams) => {
          return PickupDateSeries.listByStoreId($stateParams.storeId);
        },
        pickups: (PickupDate, $stateParams) => {
          return PickupDate.listByStoreId($stateParams.storeId);
        }
      },
      ncyBreadcrumb: {
        label: "{{ 'PICKUPMANAGE.TITLE' | translate }}"
      }
    });
})

.name;

export default pickupManageModule;
