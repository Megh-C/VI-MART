const ReviewsPage = () => {
    const [reviews, setReviews] = React.useState([]);
    const [newReview, setNewReview] = React.useState({
        hostel: '',
        block: '',
        rating: '5',
        comment: '',
        author: 'Anonymous'
    });
    const [showForm, setShowForm] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.comment.trim()) {
            setReviews(prev => [
                ...prev,
                {
                    ...newReview,
                    id: Date.now(),
                    date: new Date().toLocaleDateString()
                }
            ]);
            setNewReview({
                hostel: '',
                block: '',
                rating: '5',
                comment: '',
                author: 'Anonymous'
            });
            setShowForm(false);
        }
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="content-page">
            <div className="page-banner">
                <img src="leave-banner.jpeg" alt="Hostel Reviews" />
            </div>
            
            <div className="page-content">
                <h1>Hostel Reviews & Ratings</h1>
                
                <div className="content-section">
                    <h2><i className="fas fa-star"></i> Share Your Experience</h2>
                    
                    {!showForm ? (
                        <button 
                            className="add-review-btn"
                            onClick={() => setShowForm(true)}
                        >
                            <i className="fas fa-plus"></i> Add Review
                        </button>
                    ) : (
                        <form onSubmit={handleSubmit} className="review-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="hostel">Hostel Name</label>
                                    <select
                                        id="hostel"
                                        name="hostel"
                                        value={newReview.hostel}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Hostel</option>
                                        <option value="MH">MH (Men's Hostel)</option>
                                        <option value="LH">LH (Ladies Hostel)</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="block">Block</label>
                                    <input
                                        type="text"
                                        id="block"
                                        name="block"
                                        value={newReview.block}
                                        onChange={handleChange}
                                        placeholder="A, B, C..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <select
                                    id="rating"
                                    name="rating"
                                    value={newReview.rating}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="2">2 Stars</option>
                                    <option value="1">1 Star</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">Your Review</label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    value={newReview.comment}
                                    onChange={handleChange}
                                    placeholder="Share your hostel experience..."
                                    required
                                ></textarea>
                            </div>

                            <div className="form-actions">
                                <button 
                                    type="button" 
                                    className="cancel-btn"
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="submit-btn">
                                    Post Review
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="reviews-list">
                        <h2><i className="fas fa-comments"></i> Recent Reviews ({reviews.length})</h2>
                        
                        {reviews.map(review => (
                            <div key={review.id} className="review-card">
                                <div className="review-header">
                                    <h3>
                                        {review.hostel}-{review.block}
                                        <span className="rating-stars">
                                            {renderStars(Number(review.rating))}
                                        </span>
                                    </h3>
                                    <div className="review-meta">
                                        <span className="author">{review.author}</span>
                                        <span className="date">{review.date}</span>
                                    </div>
                                </div>
                                <p className="comment">{review.comment}</p>
                            </div>
                        ))}
                        
                        {reviews.length === 0 && (
                            <div className="no-reviews">
                                No reviews yet. Be the first to share your experience!
                            </div>
                        )}
                    </div>
                </div>

               {}
<div className="content-section">
    <h2><i className="fas fa-book"></i> Leave Guidelines</h2>
    
    <h3>Leave Guidelines - How to Manage Your Leaves</h3>
    
    <ol className="guidelines-list">
        <li>
            <strong>Getting Leave Approved</strong>
            <ul>
                <li>To apply for leave, go to VTOP under the Hostel Section</li>
                <li>Depending on your proctor, you may need to have your parent or guardian send an approval email to the proctor for your leave request</li>
            </ul>
        </li>

        <li>
            <strong>Important Leave Timing Rule</strong>
            <p className="important-note">Timing Matters:</p>
            <ul>
                <li>Suppose your leave starts at 11 PM on April 3rd, but you leave at 3 AM on April 4th</li>
                <li>Do NOT mark your attendance in the hostel for April 3rd, as this would result in leave cancellation</li>
                <li>Always remember to respect the official leave start time to avoid any issues</li>
            </ul>
        </li>

        <li>
            <strong>What to Do if You Mark Attendance by Mistake</strong>
            <ul>
                <li>If you mistakenly mark attendance for a day you're on leave, immediately try to contact your proctor</li>
                <li>Although it's unlikely they will pick up, you should still attempt</li>
                <li>If you're unable to reach the proctor, go to the warden and explain your situation</li>
                <li>The warden has the authority to approve emergency leaves. Use the emergency leave to exit the campus</li>
                <li>Afterward, get your leave properly approved by your proctor the next day to avoid any further complications</li>
            </ul>
        </li>

        <li>
            <strong>Plan Ahead for Smooth Leave Approval</strong>
            <ul>
                <li>Always plan and request your leaves in advance to avoid last-minute issues</li>
                <li>Make sure your leave start and end times are correctly mentioned to avoid attendance conflicts</li>
            </ul>
        </li>
    </ol>

    <div className="important-note">
        <h3><i className="fas fa-exclamation-circle"></i> Important</h3>
        <p>By following these guidelines, you can ensure that your leaves are processed smoothly and without any unnecessary complications.</p>
    </div>
</div>
            </div>
        </div>
    );
};

ReactDOM.render(<ReviewsPage />, document.getElementById('root'));