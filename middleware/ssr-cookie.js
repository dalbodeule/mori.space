import axios from 'axios'

export default function ({server, req}) {
  if (server) {
    axios.defaults.headers.common.cookie = req.headers.cookie
  }
}
