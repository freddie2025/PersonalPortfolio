import Loadable from "@loadable/component"

const LoadableClients = Loadable(() => import("./Clients"))

export default LoadableClients;