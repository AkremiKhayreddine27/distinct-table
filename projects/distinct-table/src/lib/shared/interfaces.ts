export interface TableConfig<MetaType = any> {
    header: TableHeader[];
    mobileHeader: TableHeader[];
    displayHeader: boolean;
    bordred: boolean;
    alignDesktop: 'center' | 'start' | 'end';
    alignMobile: 'center' | 'start' | 'end';
    showActionsType: 'hover' | 'always';
    cols: ColConfig<MetaType>[];
    mobileCols: ColConfig<MetaType>[];
    selectType: 'checkbox' | 'letters' | 'image' | 'none';
    imagePath: string;
    lettersPath: string;
    collapsedRow?: boolean;
    collapseData?: any;
    collapseComponent?: any;
    desktopActions?: TableRowAction[];
    mobileActions?: TableRowAction[];
    backgroundColor?: string;
}

export interface TableHeader {
    width: string;
    label: string;
    sort?: {
        attributes: { name: string, path: string, direction: 'desc' | 'asc' }[];
    }
}

export interface ColConfig<MetaType = any> {
    width: string;
    data: TableDataConfig<MetaType>[];
}

export interface TableDataConfig<MetaType = any> {
    line: TableLineConfig<MetaType>[];
    align: boolean;
}

/**
 * Badge type try function callback
 */
export interface TableLineConfig<MetaType = any> {
    type: 'text' | 'array' | 'date' | 'badge' | 'amount' | 'image' | 'icon' | 'action' | 'phone' | 'email' | 'collapse';
    path?: string;
    label?: string;
    image?: string;
    icon?: string;
    action?: TableRowAction;
    component?: any;
    badgeType?: 'success' | 'danger' | 'warning' | 'primary';
    badgePath?: string;
    dateFormat?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageStyle?: 'rounded' | 'rectangle';
    replaceNotFoundImageWithLetter?: boolean;
    letterPath?: string;
    getData?: (id: any) => MetaType;
    collapseData?: string;
}

export interface TableRowAction {
    type: 'icon' | 'button' | 'dropdown';
    icon?: string;
    path?: string;
    label?: string;
    calback?: string,
    dropdownConfig?: TableRowActionDropdownConfig;
}

export interface TableRowActionDropdownConfig {
    toggle: {
        type: 'icon' | 'button';
        label?: string;
        path?: string;
        icon?: string;
    };
    items: DropdownItemsConfig[]
}

export interface DropdownItemsConfig {
    data: DropdownItemDataConfig[],
    calback?: string,
}

export interface DropdownItemDataConfig {
    type: 'text' | 'icon';
    path?: string;
    label?: string;
    icon?: string;
}