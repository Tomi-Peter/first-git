// Main application logic
class GitHubGuideApp {
    constructor() {
        this.currentContent = 'overview';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadContent('overview');
    }

    setupEventListeners() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const contentType = e.target.getAttribute('data-content');
                this.loadContent(contentType);
                this.setActiveNavLink(e.target);
                
                // Close mobile menu after selection
                if (window.innerWidth < 1024) {
                    this.closeMobileMenu();
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        mobileMenuBtn.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        overlay.addEventListener('click', () => {
            this.closeMobileMenu();
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    async loadContent(contentType) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<div class="loading mx-auto"></div>';

        try {
            if (contentType === 'videos') {
                this.loadVideoContent();
                return;
            }

            const response = await fetch(`content/${contentType}.md`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const text = await response.text();
            const { metadata, content } = this.parseMarkdownWithFrontMatter(text);
            const htmlContent = marked.parse(content);
            
            contentDiv.innerHTML = htmlContent;
            this.currentContent = contentType;
            
            // Scroll to top
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error loading content:', error);
            contentDiv.innerHTML = `
                <div class="text-center py-8">
                    <p class="text-red-600">콘텐츠를 불러오는 중 오류가 발생했습니다.</p>
                    <p class="text-gray-500 mt-2">나중에 다시 시도해주세요.</p>
                </div>
            `;
        }
    }

    parseMarkdownWithFrontMatter(text) {
        const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
        const match = text.match(frontMatterRegex);
        
        if (match) {
            try {
                const metadata = jsyaml.load(match[1]);
                const content = match[2];
                return { metadata, content };
            } catch (error) {
                console.error('Error parsing YAML front matter:', error);
                return { metadata: {}, content: text };
            }
        }
        
        return { metadata: {}, content: text };
    }

    loadVideoContent() {
        const contentDiv = document.getElementById('content');
        const videoContent = `
            <h1>🎥 동영상 강의</h1>
            <p class="text-lg text-gray-600 mb-8">Git과 GitHub를 배우기 위한 엄선된 유튜브 강의 모음입니다.</p>
            
            <div class="grid gap-8">
                ${this.getVideoSections().map(section => `
                    <div class="info-card">
                        <h2 class="text-2xl font-bold mb-4 text-gray-800">${section.title}</h2>
                        <p class="text-gray-600 mb-6">${section.description}</p>
                        <div class="grid gap-6">
                            ${section.videos.map(video => `
                                <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h3 class="text-lg font-semibold mb-2">${video.title}</h3>
                                    <p class="text-gray-600 text-sm mb-3">${video.description}</p>
                                    <div class="video-container">
                                        <iframe src="${video.url}" title="${video.title}" allowfullscreen></iframe>
                                    </div>
                                    <div class="flex items-center justify-between mt-3 text-sm text-gray-500">
                                        <span>채널: ${video.channel}</span>
                                        <span>재생시간: ${video.duration}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        contentDiv.innerHTML = videoContent;
    }

    getVideoSections() {
        return [
            {
                title: "Git 기초",
                description: "Git의 기본 개념과 명령어를 배워보세요.",
                videos: [
                    {
                        title: "Git 완전 정복 - 기초부터 실무까지",
                        description: "Git의 기본 개념부터 실무에서 사용하는 고급 기능까지 체계적으로 학습",
                        url: "https://www.youtube.com/embed/Z9dvM7qgN9s",
                        channel: "드림코딩",
                        duration: "2시간 15분"
                    },
                    {
                        title: "Git 입문자를 위한 핵심 개념",
                        description: "Git을 처음 접하는 분들을 위한 필수 개념 설명",
                        url: "https://www.youtube.com/embed/FXDjmsiv8fI",
                        channel: "얄팍한 코딩사전",
                        duration: "1시간 30분"
                    }
                ]
            },
            {
                title: "GitHub 활용",
                description: "GitHub의 다양한 기능을 활용한 협업 방법을 익혀보세요.",
                videos: [
                    {
                        title: "GitHub 완벽 가이드 - 협업의 기술",
                        description: "GitHub를 활용한 효과적인 팀 협업 방법과 실무 팁",
                        url: "https://www.youtube.com/embed/lelVoCvm6fE",
                        channel: "코딩애플",
                        duration: "1시간 45분"
                    },
                    {
                        title: "Pull Request와 코드 리뷰 마스터하기",
                        description: "오픈소스 기여와 팀 프로젝트를 위한 PR 활용법",
                        url: "https://www.youtube.com/embed/pR5SNFyzdg8",
                        channel: "노마드 코더",
                        duration: "55분"
                    }
                ]
            },
            {
                title: "실무 활용",
                description: "실제 개발 환경에서의 Git/GitHub 활용 사례를 살펴보세요.",
                videos: [
                    {
                        title: "실무에서 사용하는 Git 워크플로우",
                        description: "GitFlow, GitHub Flow 등 실무 환경의 브랜치 전략",
                        url: "https://www.youtube.com/embed/EzcF6RX8RrQ",
                        channel: "우아한Tech",
                        duration: "40분"
                    },
                    {
                        title: "Git 충돌 해결과 고급 기능",
                        description: "Merge conflict 해결 방법과 rebase, cherry-pick 등 고급 기능",
                        url: "https://www.youtube.com/embed/GVYkMkA5Ckw",
                        channel: "개발자의품격",
                        duration: "1시간 20분"
                    }
                ]
            }
        ];
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new GitHubGuideApp();
});
