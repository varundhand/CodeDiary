import Skeleton from './Skeleton'

const SkeletonPost = () => {
    return (
        <div className="post">
          <div className="flex gap-3">
            <Skeleton classes="title width-50" />
            <Skeleton classes="text width-25" />
          </div>
            <Skeleton classes="text width-100" />
            <Skeleton classes="text width-100" />
            <Skeleton classes="text width-100" />
        </div>
    )
}
export default SkeletonPost