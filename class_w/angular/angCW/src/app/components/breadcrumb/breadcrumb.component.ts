import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';

interface Breadcrumb {
    label: string;
    url: string;
}

@Component({
    selector: 'app-breadcrumb',
    imports: [
        MatToolbar,
        RouterLink
    ],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
    items: Breadcrumb[] = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.items = this.createBreadcrumbs(this.activatedRoute.root);
            }
        });
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
        const children: ActivatedRoute[] = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            const routerUrl = child.snapshot.url.map(i => i.path).join('/');

            if (routerUrl !== '') {
                url = `/${ routerUrl }`;
            }
            const label = child.snapshot.data['breadcrumb'];
            if (label) {
                breadcrumbs.push({
                    label,
                    url
                });
            }
            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
