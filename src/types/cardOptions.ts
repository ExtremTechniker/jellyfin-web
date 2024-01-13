import type { BaseItemDto } from '@jellyfin/sdk/lib/generated-client';
import { CollectionType } from './collectionType';

export interface CardOptions {
    itemsContainer?: HTMLElement | null;
    parentContainer?: HTMLElement | null;
    items?: BaseItemDto[] | null;
    allowBottomPadding?: boolean;
    centerText?: boolean;
    coverImage?: boolean;
    inheritThumb?: boolean;
    overlayMoreButton?: boolean;
    overlayPlayButton?: boolean;
    overlayText?: boolean;
    preferThumb?: boolean | string | null;
    preferDisc?: boolean;
    preferLogo?: boolean;
    scalable?: boolean;
    shape?: string | null;
    lazy?: boolean;
    cardLayout?: boolean | string;
    showParentTitle?: boolean;
    showParentTitleOrTitle?: boolean;
    showAirTime?: boolean;
    showAirDateTime?: boolean;
    showChannelName?: boolean;
    showTitle?: boolean | string;
    showYear?: boolean | string;
    showDetailsMenu?: boolean;
    missingIndicator?: boolean;
    showLocationTypeIndicator?: boolean;
    showSeriesYear?: boolean;
    showUnplayedIndicator?: boolean;
    showChildCountIndicator?: boolean;
    lines?: number;
    context?: CollectionType;
    action?: string | null;
    defaultShape?: string;
    indexBy?: string;
    parentId?: string | null;
    showMenu?: boolean;
    cardCssClass?: string | null;
    cardClass?: string | null;
    centerPlayButton?: boolean;
    overlayInfoButton?: boolean;
    autoUpdate?: boolean;
    cardFooterAside?: string;
    includeParentInfoInTitle?: boolean;
    maxLines?: number;
    overlayMarkPlayedButton?: boolean;
    overlayRateButton?: boolean;
    showAirEndTime?: boolean;
    showCurrentProgram?: boolean;
    showCurrentProgramTime?: boolean;
    showItemCounts?: boolean;
    showPersonRoleOrType?: boolean;
    showProgressBar?: boolean;
    showPremiereDate?: boolean;
    showRuntime?: boolean;
    showSeriesTimerTime?: boolean;
    showSeriesTimerChannel?: boolean;
    showSongCount?: boolean;
    width?: number;
    showChannelLogo?: boolean;
    showLogo?: boolean;
    serverId?: string;
    collectionId?: string | null;
    playlistId?: string | null;
    defaultCardImageIcon?: string;
    disableHoverMenu?: boolean;
    disableIndicators?: boolean;
    showGroupCount?: boolean;
    containerClass?: string;
    noItemsMessage?: string;
}
