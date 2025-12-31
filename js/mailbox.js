/* Mailbox & Greeting Card Logic */

(function () {
    // 1. Define HTML Structure
    const mailboxHTML = `
        <!-- Mailbox Icon Trigger -->
        <div id="mailbox-trigger" class="mailbox-wrapper" title="Gửi lời chúc năm mới">
            <div class="mailbox-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <!-- <div class="mailbox-badge">1</div> -->
            </div>
        </div>

        <!-- Greeting Card Modal -->
        <div id="mailbox-modal" class="mailbox-modal-overlay">
            <div class="greeting-card">
                <button class="close-card-btn" id="close-card-btn" title="Đóng">&times;</button>
                
                <!-- Left Side: Red Design -->
                <div class="card-left">
                    <div class="decoration-stripes"></div>
                    <div class="lantern-decoration">
                        <div class="lantern-tassel"></div>
                    </div>
                    
                    <div class="year-badge-container">
                        <div class="year-text">
                            <h2>Happy<br>New<br>Year</h2>
                            <span>2026</span>
                        </div>
                    </div>

                    <!-- Decorative Flowers -->
                    <div class="flower f1"><div class="flower-center"></div></div>
                    <div class="flower f2"><div class="flower-center"></div></div>
                </div>

                <!-- Right Side: Paper/Write Area -->
                <div class="card-right">
                    <div class="card-header">
                        <span class="heart-icon">🧡</span> 
                       <h3 class="card-title" style="margin:0; border:none;">Chúc mừng năm mới !</h3>
                    </div>
                    <div class="wishes-text">
                        Giao thừa rồi, chúc Thư năm mới thật nhiều sức khỏe, luôn vui vẻ và bình an. Chúc năm nay sẽ mang đến cho Thư thật nhiều điều tốt đẹp, mọi việc đều thuận lợi và nhẹ nhàng hơn.
Chúc một năm mới thật an yên, hy vọng mọi điều tốt lành sẽ đến với em ✨
                    </div>
                </div>
            </div>
        </div>
    `;

    // 2. Inject HTML into body
    const div = document.createElement('div');
    div.innerHTML = mailboxHTML;
    document.body.appendChild(div);

    // 3. Logic
    const trigger = document.getElementById('mailbox-trigger');
    const modal = document.getElementById('mailbox-modal');
    const closeBtn = document.getElementById('close-card-btn');




    // Open Modal
    trigger.addEventListener('click', () => {
        modal.classList.add('open');
        document.body.classList.add('modal-open'); // Lock scroll
    });

    // Close Modal
    function closeModal() {
        modal.classList.remove('open');
        document.body.classList.remove('modal-open'); // Unlock scroll
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

})();
