import { title } from "@/components/primitives";

export default function BlogPage() {
	return (
		<div>
			<h1 className={title()}>Blog</h1>
			{
				/* Ideas: 
				- How I setup this site + deployment pipleline in an hour (for free!)
					- Looking at options: CMSes, Firebase, GKE, GKE on containers
						- Domain names: 
							How top level domains work
							https://adrianroselli.com/2011/06/make-your-own-tld-i-want-bacon.html

							Free eu.org
	
							How to find cheap domain names
							https://tld-list.com/
	
							Cloudflare selling at cost
	
					- Setting Up repo -> hello world
					- Creating NextJs and NextUI
						Set export as static
					- Basic Adjustments
						Site links adding my github profile as avatar cirle instead of logo
					- Deployment
						Github actions
						Build online > ran and error
						Removed the unneeded step
	
				*/
			}
		</div>
	);
}
