import {withRouter} from 'next/router'
import Link from 'next/link'

export default withRouter (({router})=> {
    return(
        <div>
            <p>
                the value of the variable is: <a>{router.query.variable}</a>.
            </p>
        </div>
    )
    
})
