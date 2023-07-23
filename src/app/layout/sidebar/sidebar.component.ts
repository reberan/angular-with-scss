import { Component, OnInit } from '@angular/core';

export interface Link {
  path: string;
  label: string;
  activeClassName: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links: Link[];
  constructor() {
    this.links = [];
  }
  ngOnInit(): void {
    this.links = [
      { path: '/', label: 'Introduction', activeClassName: 'active-link' },
      { path: '/overview', label: 'Overview', activeClassName: 'active-link' },
      { path: '/entities', label: 'Entities', activeClassName: 'active-link' },
      {
        path: '/repository',
        label: 'Repository',
        activeClassName: 'active-link',
      },
      {
        path: '/local-services',
        label: 'Local Services',
        activeClassName: 'active-link',
      },
      {
        path: '/database-queries',
        label: 'Database Queries',
        activeClassName: 'active-link',
      },
      {
        path: '/remote-services',
        label: 'Remote Queries',
        activeClassName: 'active-link',
      },
      {
        path: '/configuration',
        label: 'Configuration',
        activeClassName: 'active-link',
      },
      { path: '/testing', label: 'Testing', activeClassName: 'active-link' },
    ];
  }
}
