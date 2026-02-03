<script lang="ts">
	import { HeroBanner, Spacer, ContentBlock, AnchorItem, Treatments, Map } from '$lib/components';
	import image from '$lib/assets/towel-bottle-flowers.jpg';
</script>

<HeroBanner
	type="image"
	title="Welcome to Head2Toe Gaydon"
	content="<p>Your local beauty room offering a range of professional beauty treatments using natural, organic products.</p>"
	media={image}
	linkText="Book an appointment"
	linkUrl="mailto:Sharon@head2toegaydon.com"
/>
<AnchorItem id="about" />
<Spacer
	heightSm={40}
	heightMd={60}
	heightLg={60}
	heightXl={60}
	heightXxl={60}
	heightHd={60}
	height4k={60}
/>
<ContentBlock
	title="Hi, I'm Sharon"
	content="<p>I'm a fully trained beauty therapist and an independent consultant for Neal's Yard Remedies Organic, offering a range of professional beauty treatments using natural, organic products.</p>
<p>Relax, unwind, and treat yourself in my cozy beauty room. Whether it's for a special occasion or simply because you deserve some self-care, I provide a welcoming space to pamper yourself from head to toe. I also host pamper parties, perfect for friends, hen parties, or special celebrations.</p>
<p>Escape the stress of everyday life and indulge in a little me-time - it's the perfect antidote to a busy lifestyle.</p>"
/>
<Spacer
	heightSm={40}
	heightMd={60}
	heightLg={60}
	heightXl={60}
	heightXxl={60}
	heightHd={60}
	height4k={60}
/>
<ContentBlock
	title="Book Your Appointment or Pamper Party"
	content="
<p>Email me at <a href='mailto:Sharon@head2toegaydon.com'>Sharon@head2toegaydon.com</a> or call <a href='tel:+447931992924'>07931 992924</a> to schedule your visit or arrange a pamper party. I look forward to welcoming you soon!</p>"
	classes={['text-bg-primary', 'py-3', 'py-lg-5']}
/>
<AnchorItem id="treatments" />
<Spacer
	heightSm={40}
	heightMd={60}
	heightLg={60}
	heightXl={60}
	heightXxl={60}
	heightHd={60}
	height4k={60}
/>
<Treatments title="Treatments" />
<Spacer
	heightSm={40}
	heightMd={60}
	heightLg={60}
	heightXl={60}
	heightXxl={60}
	heightHd={60}
	height4k={60}
/>
<Map />
