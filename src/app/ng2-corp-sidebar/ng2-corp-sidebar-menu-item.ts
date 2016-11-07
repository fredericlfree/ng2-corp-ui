export class Ng2CorpSidebarMenuItem {
    title: string;
    routerLink: string[];
    externalLink: string;
    iconName: string;
    children: Ng2CorpSidebarMenuItem[];

    constructor(title: string, routerLink: string[], externalLink: string, iconName: string) {
        this.title = title;
        this.routerLink = routerLink;
        this.externalLink = externalLink;
        this.iconName = iconName;
    }
}
