# Prefer the use of the `sectioned` props in Webster components instead of wrapping all contents in a `Section` component. (webster-prefer-sectioned-prop)

Webster provides a convenience `sectioned` prop for some components that wraps the contents in a `Section` component. This rule enforces that the `sectioned` shorthand is used over wrapping the entire contents of the component in a `Section` subcomponent.

## Rule details

This rule currently Require the use of the `sectioned` prop over the `Section` subcomponent for the following components:

* [`Card`](https://webster.templeandwebster.dev/components/deprecated/card)
* [`LegacyCard`](https://webster.templeandwebster.dev/components/layout-and-structure/legacy-card)
* [`Popover`](https://webster.templeandwebster.dev/components/overlays/popover)
* [`Layout`](https://webster.templeandwebster.dev/components/layout-and-structure/layout)

This rule only takes effect when the `Section` subcomponent is the only top-level child of the components specified above, and when the `Section` component has no props.

The following patterns are considered warnings:

```js
import {Card, LegacyCard, Popover, Layout} from '@tpw/webster';

<Card><Card.Section>Contents</Card.Section></Card>
<LegacyCard><LegacyCard.Section>Contents</LegacyCard.Section></LegacyCard>
<Popover><Popover.Section>Contents</Popover.Section></Popover>
<Layout><Layout.Section>Contents</Layout.Section></Layout>
```

The following patterns are not warnings:

```js
import {Card, LegacyCard, Layout, Popover} from '@tpw/webster';

<Card sectioned>Contents</Card>

<Card>
  <Card.Section subdued>Contents</Card.Section>
</Card>

<LegacyCard sectioned>Contents</LegacyCard>

<LegacyCard>
  <LegacyCard.Section subdued>Contents</LegacyCard.Section>
</LegacyCard>

<Layout>
  <Layout.AnnotatedSection></Layout.AnnotatedSection>
</Layout>

<Popover>
  <Popover.Section>One</Popover.Section>
  <Popover.Section>Two</Popover.Section>
</Popover>
```
