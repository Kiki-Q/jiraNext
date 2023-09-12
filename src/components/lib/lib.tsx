import { Typography } from "antd"

export const FullPageErrorFallback = ({error} : {error: Error| null}) => { 
    // <FullPage>
        <Typography.Text type={"danger"}>{error?.message}</Typography.Text>  
    // </FullPage>
 }