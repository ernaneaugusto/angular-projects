import { BreadcrumbInterface } from './breadcrumb.interface';
import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {
	public breadcrumbInfos: BreadcrumbInterface = { pageName: '' };

	constructor(
		private breadcrumbService: BreadcrumbService
	) {
		this.breadcrumbService
			.breadcrumbName
			// .subscribe((pageName) => console.log("#### pageName ###", pageName));
			.subscribe((pageName) => {
				console.log("#### pageName ###", pageName)
				return this.breadcrumbInfos.pageName = pageName;
			});
	}

	ngOnInit(): void { }

}
