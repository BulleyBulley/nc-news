import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar_section_class">
      
        <h3>Sort By:</h3>
        <div className='sidebar_sort_buttons'>

<input type="radio" value="date_created" name="sort_by" /> Date Created

<input type="radio" value="comment_count" name="sort_by" /> Comment Count

<input type="radio" value="votes" name="sort_by" /> Votes

</div>
    </section>
  );
};

export default Sidebar;
