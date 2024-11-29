function showFirework(color) {
    const container = document.getElementById('fireworks-container');
    const firework = document.createElement('div');
    firework.classList.add('firework', color);
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.animationDuration = `${Math.random() * 2 + 1}s`;

    container.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 3000); // 移除烟花元素
}

// 添加烟花的样式
const style = document.createElement('style');
style.innerHTML = `
    .firework {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 0;
        animation: explode 1s ease-out forwards;
    }

    @keyframes explode {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    .red {
        background-color: red;
    }

    .blue {
        background-color: blue;
    }

    .green {
        background-color: green;
    }

    .yellow {
        background-color: yellow;
    }

    .purple {
        background-color: purple;
    }
`;

document.head.appendChild(style);
