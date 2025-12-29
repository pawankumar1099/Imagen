import logo from './logo.png'
import logo_icon from './logo_icon.svg'
import github_icon from './github_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    linkedin_icon,
    github_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'Maya Patel',
    role: 'Product Designer',
    stars: 5,
    text: `ImaGEN turned rough ideas into polished visuals in seconds. It’s now my quickest way to storyboard and prototype.`
  },
  {
    image: profile_img_2,
    name: 'Lucas Nguyen',
    role: 'Content Marketer',
    stars: 5,
    text: `Social posts look premium without a design team. Variations help me test concepts fast and pick winners.`
  },
  {
    image: profile_img_1,
    name: 'Sofia Ramirez',
    role: 'Indie Game Dev',
    stars: 5,
    text: `Concept art generation is a breeze with ImaGEN. The quality and consistency save me hours every week.`
  },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]