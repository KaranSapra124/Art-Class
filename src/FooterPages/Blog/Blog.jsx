import React from 'react';
import './Blog.css'; // Ensure you create this CSS file

const Blog = () => {
    return (
        <div id="blog-container">
            <header id="blog-header">
                <h1>Art Class Blog</h1>
                <p>Welcome to our blog where we share tips, tutorials, and news about the art world!</p>
            </header>

            <div id="blog-content">
                <div id="blog-posts">
                    <article id="blog-post-1">
                        <h2>The Importance of Art Education</h2>
                        <p>
                            Art education plays a crucial role in the development of children and young adults. 
                            It helps foster creativity, critical thinking, and self-expression. In this post, 
                            we will explore the various benefits of incorporating art into educational curriculums.
                        </p>
                        <p>
                            Art not only enhances cognitive skills but also helps in emotional development. 
                            Students who participate in art programs are more likely to excel academically and 
                            develop strong communication skills.
                        </p>
                        <footer id="post-footer">
                            <p>Posted by <strong>John Doe</strong> on January 10, 2024</p>
                        </footer>
                    </article>

                    <article id="blog-post-2">
                        <h2>5 Tips for Painting Beginners</h2>
                        <p>
                            Are you a beginner looking to dive into the world of painting? Here are five essential 
                            tips to help you get started:
                        </p>
                        <ul>
                            <li>Start with the basics: Understand color theory and brush techniques.</li>
                            <li>Practice regularly: The more you paint, the better you get.</li>
                            <li>Experiment with different styles: Don't be afraid to try new things!</li>
                            <li>Invest in quality materials: Good paint and brushes make a difference.</li>
                            <li>Join a community: Engaging with other artists can provide support and inspiration.</li>
                        </ul>
                        <footer id="post-footer">
                            <p>Posted by <strong>Jane Smith</strong> on February 5, 2024</p>
                        </footer>
                    </article>

                    <article id="blog-post-3">
                        <h2>Exploring Different Art Mediums</h2>
                        <p>
                            Art is an expansive field with various mediums to explore. From oil painting to digital art, 
                            each medium offers unique challenges and rewards. In this blog, we will take a look at some 
                            popular art mediums and their characteristics.
                        </p>
                        <p>
                            Oil painting allows for rich colors and textures, while watercolor provides a light, 
                            translucent effect. Digital art offers endless possibilities with editing and creativity. 
                            Finding the right medium for your artistic expression can be a journey worth taking.
                        </p>
                        <footer id="post-footer">
                            <p>Posted by <strong>Emily Johnson</strong> on March 12, 2024</p>
                        </footer>
                    </article>
                </div>

                <aside id="blog-sidebar">
                    <h2>Related Search</h2>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Art#:~:text=Art%20provides%20a%20way%20to,appreciates%20art%2C%20music%20or%20poetry.&text=Expression%20of%20the%20imagination.">Exploring About the A-R-T-</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Color_theory">Understanding Color Theory</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Brush">Mastering Brush Techniques</a></li>
                    </ul>
                </aside>
            </div>

            <footer id="blog-footer">
                <p>&copy; 2024 Art Class. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Blog;
