import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Training as TrainingView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  ProjectHome as ProjectHomeView,
  ProjectDetail as ProjectDetailView,
  DatasetComponent as ProjectDatasetView,
  LabelsComponent as ProjectLabelsView,
  AnnotationComponent as ProjectAnnotationView
} from './views';


const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={TrainingView}
        exact
        layout={MainLayout}
        path="/training"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={ProjectHomeView}
        exact
        layout={MainLayout}
        path="/projects"
      />
      <RouteWithLayout
        component={ProjectDetailView}
        exact
        layout={MainLayout}
        path="/projects/:projectId"
      />
      <RouteWithLayout
        component={ProjectDatasetView}
        exact
        layout={MainLayout}
        path="/projects/:projectId/dataset"
      />
      <RouteWithLayout
        component={ProjectLabelsView}
        exact
        layout={MainLayout}
        path="/projects/:projectId/labels"
      />
      <RouteWithLayout
        component={ProjectAnnotationView}
        exact
        layout={MainLayout}
        path="/projects/:projectId/annotations"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
