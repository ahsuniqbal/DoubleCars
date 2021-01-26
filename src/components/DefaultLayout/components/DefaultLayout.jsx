import React from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../../../navigation/RouteTypes';
import routes from '../../../navigation/Routes';
import ScrollToTop from '../../../navigation/ScrollToTop';


const NavigationBar = React.lazy(() => import('../../NavigationBar'))
const NotFound = React.lazy(() => import('../../../navigation/NotFound'));
const Footer = React.lazy(() => import('../../Footer'));


const DefaultLayout = () => {
    return(
        <div>
            <ScrollToTop />
            {/* The navigation bar will be shown above every paged rendered inside the switch */}
            <NavigationBar />
                <Switch>
                    {
                        routes.map((route, idx) => {
                            return route.component ? (
                                // Public route will be shown to every visitor
                                route.public ? 
                                <PublicRoute 
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                restricted={route.restricted}
                                component={route.component} />
                                : 
                                // Private route will be shown to only those visitors who are logged in
                                <PrivateRoute
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                component={route.component} />
                            ) : null;
                        })
                    }
                    {/* If no route is matched in the above swith then 404 page will be shown */}
                    <PublicRoute component={NotFound} />
                </Switch>
            {/* Footer will be visible at the end of every page rendered inside the switch */}
            <Footer />
        </div>
    );
}

export default DefaultLayout;