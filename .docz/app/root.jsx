import React from 'react'
import { hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import Wrapper from 'docz/wrapper.js'

const Root = () => <Theme wrapper={Wrapper} />

export default hot(module)(Root)
