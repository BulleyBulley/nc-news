import React from "react";

const Sidebar = (props) => {
  const { setSortBy, setOrderBy } = props
  
  return (
    <section className="sidebar_section_class">

        <h3>Sort By:</h3>
        <div className='sidebar_sort_buttons'>
        <div className='sidebar_sort_buttons_items'>
<input type="radio" value="created_at" name="sort_by"
  onClick={() => setSortBy('created_at')}
/> Date Created

<input type="radio" value="comment_count" name="sort_by"
onClick={() => setSortBy('comment_count')}
/> Comment Count

<input type="radio" value="votes" name="sort_by"
onClick={() => setSortBy('votes')}
/> Votes

<input type="radio" value="title" name="sort_by"
onClick={() => setSortBy('title')}
/> Title
</div>

<div className="sidebar_sort_buttons_direction">
<h3>Order</h3>
<input type="radio" value="asc" name="order"
  onClick={() => setOrderBy('asc')}
/> Asc
<input type="radio" value="desc" name="order"
  onClick={() => setOrderBy('desc')}
/> Desc

</div>


</div>
    </section>
  );
};

export default Sidebar;
