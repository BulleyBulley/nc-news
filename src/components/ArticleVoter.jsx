import { patchVotes } from "../utils/Api";
import { useState } from "react";

const ArticleVoter = ( {votes, article_id}) => {
    const [ voteChange, setVoteChange ] = useState(0);
    const [isError, setIsError ] = useState(false)

    const handleVote = () => {
        setIsError(false);
        setVoteChange((currVoteChange) => currVoteChange + 1);
        patchVotes(article_id, 1).catch(() => {
            console.log('in votes catch');
            setIsError(true)
            setVoteChange((currVoteChange) => currVoteChange -1)
        })
    }
    return (
        <>
        <div className='articles_voter_container'>
       

        <label htmlFor='voter_button_id'><h4>Votes: {votes + voteChange}</h4></label>
         <button className='voter_button' id='voter_button_id' onClick={handleVote}>
                       
         <i class="fas fa-thumbs-up"></i>

                      </button>
                      </div>
        </>
    )

}

export default ArticleVoter