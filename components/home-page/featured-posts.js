import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

//精选博客主题
function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
