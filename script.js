// 你可以在这里添加一些交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 示例：点击按钮时显示一个消息
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('了解更多内容！');
        });
    }
});

