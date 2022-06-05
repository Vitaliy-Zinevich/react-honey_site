import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader className="honey-block"
    speed={0}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="144" y="146" rx="0" ry="0" width="0" height="1" /> 
    <rect x="226" y="367" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="308" rx="0" ry="0" width="256" height="30" /> 
    <rect x="1" y="343" rx="0" ry="0" width="255" height="39" /> 
    <rect x="2" y="404" rx="0" ry="0" width="89" height="28" /> 
    <rect x="132" y="400" rx="20" ry="20" width="123" height="36" /> 
    <rect x="0" y="-2" rx="0" ry="0" width="256" height="298" />
  </ContentLoader>
)

export default Skeleton;