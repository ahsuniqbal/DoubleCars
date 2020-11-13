import React from 'react';
import { Container } from 'reactstrap';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../../../navigation/RouteTypes';
import routes from '../../../navigation/Routes';


const NavigationBar = React.lazy(() => import('../../NavigationBar'))
const NotFound = React.lazy(() => import('../../../navigation/NotFound'));
const Footer = React.lazy(() => import('../../Footer'));

const DefaultLayout = () => {
    return(
        <div>
            <NavigationBar />

            <Container>
                <Switch>
                    {
                        routes.map((route, idx) => {
                            return route.component ? (
                                route.public ? <PublicRoute 
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                restricted={route.restricted}
                                component={route.component} />
                                : <PrivateRoute
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                component={route.component} />
                            ) : null;
                        })
                    }
                    <PublicRoute component={NotFound} />
                </Switch>
            </Container>

            <Footer />
        </div>
    );
}

export default DefaultLayout;