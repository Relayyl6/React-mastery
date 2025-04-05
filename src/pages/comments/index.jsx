import useFetch from "../../hooks/use-fetch"



function CommentList() {

    const {data, pending, ErrorMsg} = useFetch('https://dummyjson.com/comments');

    if (pending ) {
        return (
            <h1>Fetching Comments! please wait</h1>
        )
    }

    console.log(data);

    return (
        <>
            <h1>Comment list page</h1>
            <ul>
                {
                    data?.comments?.length > 0 ?
                    data.comments.map(CommentsItem =>
                        <div style={{ textAlign : 'center' }}>
                            <label>{CommentsItem?.body}</label>
                            <p>{CommentsItem?.likes}</p>
                        </div>
                    ): null
                }
            </ul>
        </>
    )
}

export default CommentList