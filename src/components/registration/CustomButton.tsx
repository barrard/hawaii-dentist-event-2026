'use client';

import React, { useState } from 'react';
import { colors } from '@/lib/colors';

interface CustomButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'warm' | 'olive' | 'outline' | 'ghost' | 'gradient' | 'dark';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    href?: string;
    target?: string;
    rel?: string;
}

const CustomButton = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    onClick,
    href,
    ...props
}: CustomButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const baseClasses = `
    relative inline-flex items-center justify-center font-semibold 
    transition-all duration-200 ease-out cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    overflow-hidden group
  `;

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
        xl: 'px-10 py-5 text-xl rounded-2xl'
    };

    const getVariantStyle = (variant) => {
        const variants = {
            primary: {
                backgroundColor: colors.primary,
                color: '#ffffff',
                boxShadow: `0 4px 14px 0 ${colors.primary}40`,
                hoverStyle: {
                    backgroundColor: colors.highlight,
                    boxShadow: `0 6px 20px 0 ${colors.primary}60`,
                    transform: 'translateY(-2px)'
                }
            },
            secondary: {
                backgroundColor: colors.secondary,
                color: '#ffffff',
                boxShadow: `0 4px 14px 0 ${colors.secondary}40`,
                hoverStyle: {
                    backgroundColor: colors.coolContrast,
                    boxShadow: `0 6px 20px 0 ${colors.secondary}60`,
                    transform: 'translateY(-2px)'
                }
            },
            accent: {
                backgroundColor: colors.accent,
                color: '#ffffff',
                boxShadow: `0 4px 14px 0 ${colors.accent}40`,
                hoverStyle: {
                    backgroundColor: colors.tertiary,
                    boxShadow: `0 6px 20px 0 ${colors.accent}60`,
                    transform: 'translateY(-2px)'
                }
            },
            warm: {
                backgroundColor: colors.warmHighlight,
                color: '#ffffff',
                boxShadow: `0 4px 14px 0 ${colors.warmHighlight}40`,
                hoverStyle: {
                    backgroundColor: colors.tertiary,
                    boxShadow: `0 6px 20px 0 ${colors.warmHighlight}60`,
                    transform: 'translateY(-2px)'
                }
            },
            olive: {
                backgroundColor: colors.mutedForeground,
                color: '#ffffff',
                boxShadow: `0 4px 14px 0 ${colors.mutedForeground}40`,
                hoverStyle: {
                    backgroundColor: colors.coolContrast,
                    boxShadow: `0 6px 20px 0 ${colors.mutedForeground}60`,
                    transform: 'translateY(-2px)'
                }
            },
            outline: {
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `2px solid ${colors.primary}`,
                boxShadow: `0 2px 8px 0 ${colors.primary}20`,
                hoverStyle: {
                    backgroundColor: colors.primary,
                    color: '#ffffff',
                    boxShadow: `0 4px 14px 0 ${colors.primary}40`,
                    transform: 'translateY(-1px)'
                }
            },
            ghost: {
                backgroundColor: 'transparent',
                color: colors.foreground,
                hoverStyle: {
                    backgroundColor: colors.lightBackground,
                    transform: 'translateY(-1px)'
                }
            },
            gradient: {
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.warmHighlight} 50%, ${colors.secondary} 100%)`,
                color: '#ffffff',
                boxShadow: `0 4px 14px 0 ${colors.primary}40`,
                hoverStyle: {
                    background: `linear-gradient(135deg, ${colors.highlight} 0%, ${colors.primary} 50%, ${colors.coolContrast} 100%)`,
                    boxShadow: `0 6px 20px 0 ${colors.primary}60`,
                    transform: 'translateY(-2px) scale(1.02)'
                }
            },
            dark: {
                backgroundColor: colors.deepAccent,
                color: colors.lightBackground,
                boxShadow: `0 4px 14px 0 ${colors.deepAccent}60`,
                hoverStyle: {
                    backgroundColor: colors.accent,
                    boxShadow: `0 6px 20px 0 ${colors.deepAccent}80`,
                    transform: 'translateY(-2px)'
                }
            }
        };
        return variants[variant] || variants.primary;
    };

    const variantStyle = getVariantStyle(variant);
    const currentStyle = isHovered ? { ...variantStyle, ...variantStyle.hoverStyle } : variantStyle;

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => {
        setIsPressed(false);
        setIsHovered(false);
    };
    const handleMouseEnter = () => setIsHovered(true);

    let pressStyle = {};
    if (isPressed) {
        pressStyle = {
            transform: (currentStyle.transform || '') + ' scale(0.98) translateY(1px)',
            boxShadow: variantStyle.boxShadow // Reset to base shadow when pressed
        };
    }

    const finalStyle: React.CSSProperties = {
        ...currentStyle,
        ...pressStyle,
        transition: 'all 0.2s ease-out'
    };

    const content = (
        <>
            {/* Shimmer effect */}
            <div
                className='absolute inset-0 -translate-x-full opacity-30 transition-transform duration-700 group-hover:translate-x-full'
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                }}
            />
            <span className='relative z-10 flex items-center gap-2'>{children}</span>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={`${baseClasses} ${sizeClasses[size]} ${className}`}
                style={finalStyle}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                {...props}>
                {content}
            </a>
        );
    }

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${className}`}
            style={finalStyle}
            onClick={onClick}
            disabled={disabled}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            {...props}>
            {content}
        </button>
    );
};

export default CustomButton;