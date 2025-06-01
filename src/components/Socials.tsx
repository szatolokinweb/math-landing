import { IconType } from 'react-icons';
import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa';
import { SiVk } from 'react-icons/si';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

interface SocialsProps {
  socialLinks?: SocialLink[];
  className?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: FaGithub,
  },
  {
    name: 'Telegram',
    url: 'https://t.me',
    icon: FaTelegram,
  },
  {
    name: 'VK',
    url: 'https://vk.com',
    icon: SiVk,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: FaYoutube,
  },
];

export default function Socials({ socialLinks = defaultSocialLinks, className = '' }: SocialsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 transition-colors duration-200"
            aria-label={`Visit our ${link.name} page`}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
} 