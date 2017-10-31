<template>
    <div class="background mainLayoutDesktop">
      <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
  <!-- Header -->
  <KTopbar  @toggleSidenav="$refs.layout.toggleLeft()" v-if="isLoggedIn" slot="header">
    <q-btn slot="left" flat @click="$refs.layout.toggleLeft()">
      <i class="fa fa-bars"></i>
    </q-btn>
  </KTopbar>
  <KTopbarLoggedOut v-if="!isLoggedIn" slot="header">
  </KTopbarLoggedOut>
  <!-- Left Side Panel -->
  <div slot="left">
    <StandardMap :markers="[]" style="height: 120px" />
    <q-list no-border link>
      <q-list-header>
        Foodsharing Wurzen
        <div style="float:right;margin-right: 1em;margin-top: -0.3em">

          <q-icon name="more_vert">
            <!-- popover menu -->
          </q-icon>
        </div>
      </q-list-header>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-bullhorn" />
        <q-item-main label-lines="1" label="Wall" />
      </q-side-link>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-clock-o" />
        <q-item-main label-lines="1" label="History" />
      </q-side-link>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-shopping-cart" color="green-5" />
        <q-item-main label-lines="1" label="Landgut Nemt" />
        <q-item-side right >
          <q-icon name="more_vert">
            <!-- popover menu -->
          </q-icon>
        </q-item-side>
      </q-side-link>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-shopping-cart" color="green-5" />
        <q-item-main label-lines="1" label="Gesundheitshaus Kräuterfee" />
        <q-item-side right >
          <q-icon name="more_vert">
            <!-- popover menu -->
          </q-icon>
        </q-item-side>
      </q-side-link>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-shopping-cart" color="green-5" />
        <q-item-main label-lines="1" label="EDEKA Neumaier" />
        <q-item-side right style="margin-right:-15px">
          <q-chip color="secondary" small style="min-height: 8px;font-size:0.6em">3</q-chip>
        </q-item-side>
        <q-item-side right >
          <q-icon name="more_vert">
            <!-- popover menu -->
          </q-icon>
        </q-item-side>
      </q-side-link>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-shopping-cart" color="red-5" />
        <q-item-main label-lines="1" label="Griesson/DeBeukelaer Factory Outlet" />
        <q-item-side right >
          <q-icon name="more_vert">
            <!-- popover menu -->
          </q-icon>
        </q-item-side>
      </q-side-link>
      <q-side-link item to="/docs" >
        <q-item-side />
        <q-item-main sublabel="Show All Stores..." />
        </q-item-side>
      </q-side-link>
      <q-list-header>
        Field-Research Wurzen
        <div style="float:right;margin-right: 1em;margin-top: -0.3em">
          <q-icon name="fa-angle-down" />
        </div>
      </q-list-header>
      <q-list-header>
        Regensburg
        <div style="float:right;margin-right: 1em;margin-top: -0.3em">
          <q-icon name="fa-angle-down" />
        </div>
      </q-list-header>
      <q-list-header>Your Pickups</q-list-header>
      <q-side-link item to="/docs">
        <q-item-side icon="fa-calendar-check-o" />
        <q-item-main label-lines="1" label="Landgut Nemt" sublabel="Monday, 8 pm" />
        <q-item-side right style="margin-right:-15px">
          <q-chip color="secondary" small style="min-height: 8px;font-size:0.6em">10</q-chip>
        </q-item-side>
        <q-item-side right >
          <q-icon name="more_vert">
            <!-- popover menu -->
          </q-icon>
        </q-item-side>
      </q-side-link>
    </q-list>
  </div>
  <MainAlerts />
  <!-- Main Content -->
  <router-view />
</q-layout>
      <!-- <q-layout :reveal="$q.platform.is.mobile" class="wrapper" ref="layout" :view="layoutView" :right-breakpoint="1100">
        <div slot="header">
          <KTopbar  @toggleSidenav="$refs.layout.toggleLeft()" v-if="isLoggedIn" slot="header">
            <q-btn slot="left" flat @click="$refs.layout.toggleLeft()">
              <i class="fa fa-bars"></i>
            </q-btn>
          </KTopbar>
          <KTopbarLoggedOut v-if="!isLoggedIn" slot="header">
          </KTopbarLoggedOut>
        </div>
        <template slot="left" v-if="$q.platform.is.mobile">
          <MobileSidenav @toggleSidenav="$refs.layout.toggleLeft()" />
        </template>
        <MainAlerts />
        <div class="mainContent row justify-between no-wrap">
          <div class="whiteSpace gt-sm desktop-only"/>
            <router-view class="desktop-only sidenav-desktop" name="sidenav"></router-view>
          <div class="mainContent-page">
            <router-view></router-view>
          </div>
          <div class="whiteSpace gt-sm desktop-only"/>
        </div>
        <KFooter v-if="!isLoggedIn" class="mobile-only"/>

        <MobileNavigation v-if="isLoggedIn" class="mobile-only" slot="footer"></MobileNavigation>
        <KFooter class="desktop-only" slot="footer"/>
      </q-layout> -->
    </div>
</template>

<script>

import KTopbar from '@/components/Layout/KTopbar'
import KTopbarLoggedOut from '@/components/Layout/LoggedOut/KTopbar'
import KFooter from '@/components/Layout/KFooter'
import MobileNavigation from '@/components/Layout/MobileNavigation'
import MobileSidenav from '@/components/Layout/MobileSidenav'
import StandardMap from '@/components/Map/StandardMap'
import MainAlerts from '@/components/Layout/MainAlerts'
import { QCollapsible, QLayout, QChip, QPopover, QItem, QBtn, QIcon, QItemTile, QList, QSideLink, QListHeader, QItemMain, QItemSide } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  components: { StandardMap, KTopbar, KTopbarLoggedOut, KFooter, MobileNavigation, MobileSidenav, QCollapsible, QLayout, QChip, QPopover, QItem, QBtn, QIcon, QItemTile, MainAlerts, QList, QSideLink, QListHeader, QItemMain, QItemSide },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
    layoutView () {
      if (this.$q.platform.is.mobile) {
        return 'hHh lpr fFf'
      }
      return 'hHh lpr fff'
    },
  },
}
</script>


<style scoped lang="stylus">

.q-item {
  font-size: 0.9em;
  padding: 5px 16px;
  min-height: 36px;
}
/*.sidenav-desktop
  margin-right 1em
  width 30%
  min-width 250px
  max-width 30em
body.desktop .mainContent-page
  min-width 400px
  max-width: 57em
.mainContent-page
  width 100%
.whiteSpace
  width 5%*/

.background
  background-image url('../assets/repeating_grey.jpg')
  background-size: 600px
  background-attachment:fixed
</style>
