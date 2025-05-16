- [x] Add images to project overview page.
- [x] Change cards used in `work-packages.astro`
- [x] Add resources pages
- [x] Fix resource pages content and layout (i.e image below title)
- [x] Fix goal grids
- [x] Upload images for project team
- [x] Ensure footer is sticky and always located at bottom of viewport (see `modularcirc.astro` page for an example of the issue)
- [x] Update images for work packages
- [ ] Improve layout of work packages page
- [x] Improve contact page
- [ ] Sort GitHub action to publish

## Blocked

<!-- Waiting information from Steve or Mojiba -->

- [ ] Update social buttons (and icons) at the bottom of the page
- [ ] Add information about partners

<!-- Waiting on copy review -->

- [ ] Update WP copy
- [ ] Update resource copy

<!-- Waiting logo and illustration from Jonny -->

- [ ] Add hero image to `index.astro`

<!-- Notion page incomplete -->

- [ ] Update `team.json` with all project team members

## Optional Improvements

Here's a list of critiques and suggestions for improvements:

    UI/UX & Consistency:

        Visual Hierarchy on Dense Pages: Pages like "Project Overview" and "Work Packages" are content-rich. While readable, consider enhancing visual hierarchy further. For example, using slightly different background shades or borders for distinct thematic sections within a long page could break up content and improve scannability.

            Action: Review long content pages. Consider subtle background variations or bordered sections for better visual segmentation.

        Interactive Element Consistency: Hover and focus states are generally good. Ensure the underline underline-offset-4 for active navigation links is consistently applied to all navigation elements, including those within mega menus if applicable.

            Action: Double-check active/hover/focus states on all navigation links, including within mega menus, for consistency.

        Mobile Experience for Mega Menus: Mega menus collapse on smaller screens. Test the usability of the collapsed (likely accordion-style) mega menus thoroughly on various mobile sizes. Ensure tap targets are adequate and content is easily navigable.

            Action: Perform rigorous testing of mega menu functionality and readability on various mobile device sizes.

        Card Component Consistency: The site uses card-like structures in multiple places (team, blog index, resources index). While the current approach works, a generic Card.astro component with slots for content (header, body, image, footer) could enforce greater visual consistency and reduce code duplication.

            Action: Evaluate the creation of a reusable Card.astro component to standardize card layouts across the site.

    Content Presentation:

        Blog Mega Menu Layout (src/components/common/MegaMenu/Blog.astro): The layout xl:grid-cols-1 2xl:grid-cols-2 might not be optimal for all scenarios. If there's only the "Featured" post and one "Browse" link, xl:grid-cols-1 can leave significant empty space.

            Action: Re-evaluate the grid column definition for the Blog mega menu on XL screens to ensure it uses space effectively, perhaps making it xl:grid-cols-1 consistently or dynamically adjusting based on content.

        Team Page Placeholders (src/pages/about/project-team.astro): The code mentions /images/team/team-placeholder.jpeg.

            Action: Ensure the placeholder image is visually neutral and professional. If possible, use a generic silhouette or a project-branded graphic.

        "Current Focus" on Work Packages: If a "Current Focus" section is empty or marked as "TODO", consider hiding it or providing a generic "Updates coming soon" message rather than displaying "TODO". Self-correction: I will implement this logic in the revised code for work-packages.astro.

    Accessibility (A11y):

        Color Contrast: The teal and slate palette is generally good. However, a quick check with a color contrast analyzer for key text elements against their backgrounds (especially lighter grays or colored backgrounds like bg-teal-50) is advisable.

            Action: Perform a color contrast audit for main text/background combinations, particularly for secondary text or text on light colored backgrounds.

        Focus Indicators: Tailwind's default focus rings are usually sufficient. If any custom focus styling is applied (or default is removed), ensure it's highly visible.

            Action: Verify that all interactive elements have clear and consistent focus indicators for keyboard navigation.

    Code & Maintainability:

        Icon Sizing in Icon.astro: The class generation size-${size.replace('px', '')} is a common workaround for dynamic Tailwind classes. It's functional but could be slightly cleaner if a predefined set of size classes or a mapping object were used if you have standard icon sizes.

            Action (Minor): If icon sizing becomes complex or frequently used with many variations, consider a more structured approach to mapping size props to Tailwind classes. For now, it's acceptable.

        Image Handling: team.json references images directly from /public, while blog coverImage uses astro:assets. This is a common pattern due to how astro:assets works primarily with explicit imports or frontmatter.

            Action: This is generally fine. Ensure it's a conscious decision. For images where optimization is critical and they can be processed at build time (even if referenced from data files), explore if Astro's getImage() could be used programmatically, though this is more advanced.

    Development & Project Management:

        TODO.md: Keep this file updated. The unchecked items (social buttons, partner info, hero image for index.astro, full team list) depend on external input.

            Action: Prioritize obtaining the missing information/assets to complete the TODO.md items.

        Favicon: The BaseLayout.astro has a commented-out favicon link: // { rel: "icon", href: "/icon.svg", type: "image/svg+xml" }, // TODO: Add CVD-Net favicon in Phase 6.

            Action: Prioritize creating and adding a favicon for brand identity.
