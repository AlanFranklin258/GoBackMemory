export const useDevice = () => useState<string>('device', ()=>'PC')
export const useRouteType = () => useState<string>('routeType', ()=>'PC')
export const useReloadPage = () => useState<Boolean>('reloadPage', ()=>false)