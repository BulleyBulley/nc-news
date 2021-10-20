import React from "react";

const Sidebar = (props) => {
  const { sortBy, setSortBy } = props
  
  console.log(setSortBy)
  return (
    <section className="sidebar_section_class">

        <h3>Sort By:</h3>
        <div className='sidebar_sort_buttons'>

<input type="radio" value="created_at" name="sort_by"
  onClick={() => setSortBy('created_at')}
/> Date Created

<input type="radio" value="comment_count" name="sort_by"
onClick={() => setSortBy('comment_count')}
/> Comment Count

<input type="radio" value="votes" name="sort_by"
onClick={() => setSortBy('votes')}
/> Votes

</div>
    </section>
  );
};

export default Sidebar;
