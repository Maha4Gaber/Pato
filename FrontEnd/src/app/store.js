import { configureStore } from '@reduxjs/toolkit';
import BlogSlice from '../Components/Blog/blogSlice';
import CommentsSlice from '../Components/Blog/CommentsSlice';
import SaveBlog_id from '../Components/Blog/SaveBlog_id';
import SingleBlog from '../Components/Blog/SingleBlog';
import GetBlogsSlice from '../Components/Dashbourd/Blogs/Slices/GetBlogsSlice';
import SaveBlogId from '../Components/Dashbourd/Blogs/Slices/SaveBlogId';
import UpdateBlog  from '../Components/Dashbourd/Blogs/Slices/UpdatBlog';
import AddRestSlice from '../Components/Dashbourd/Rests/Slices/AddRestSlice';
import GetRestsSlice from '../Components/Dashbourd/Rests/Slices/GetRestsSlice';
import SaveRestId from '../Components/Dashbourd/Rests/Slices/SaveRestId';
import UpdateRestSlice from '../Components/Dashbourd/Rests/Slices/UpdateRestSlice';
import DinnerSlice  from '../Components/Menu/Slices/Dinner';
import LunchSlice from '../Components/Menu/Slices/LunchSlice';
import MenuSlice from '../Components/Menu/Slices/MenuSlice';
import RestSlice  from '../Components/Menu/Slices/Restslice';

export const store = configureStore({
  reducer: {
    menu: MenuSlice,
    rest: RestSlice,
    lunch: LunchSlice,
    dinner: DinnerSlice,
    blog: BlogSlice,
    blog_id: SaveBlog_id,
    dblog: GetBlogsSlice,
    drest: GetRestsSlice,
    Rest_id:SaveRestId,
    Blog_id:SaveBlogId,
    updaterest: UpdateRestSlice,
    updateblog: UpdateBlog,
    addrest: AddRestSlice,
    SingleBlog: SingleBlog,
    comments:CommentsSlice
  },
})