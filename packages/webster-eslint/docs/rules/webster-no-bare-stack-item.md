# Disallow the use of Webster’s `Stack.Item` and `LegacyStack.Item` without any custom props. (webster-no-bare-stack-item)

The Webster [`Stack` component](https://webster.templeandwebster.dev/components/deprecated/stack) and [`LegacyStack` component](https://webster.templeandwebster.dev/components/layout-and-structure/legacy-stack) have an `Item` subcomponent that is automatically wrapped around all children. As such, it is useless to wrap any content in a `Stack.Item` or `LegacyStack.Item` unless a non-default prop value is provided. This rule prevents creating such items.

Note that this rule will only work if the Stack component was explicitly imported using a named, default, or namespace import, and not when using dynamic imports (`import('@tpw/webster')`).

## Rule Details

The following patterns are considered warnings:

```js
import * as Webster from '@tpw/webster';
import {Stack, LegacyStack} from '@tpw/webster';
import {Stack as WebsterStack, LegacyStack as WebsterLegacyStack} from '@tpw/webster';

<Stack><Stack.Item>Content</Stack.Item></Stack>
<Webster.Stack.Item>Content</Webster.Stack.Item>
<WebsterStack.Item>Content</WebsterStack.Item>
<LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>
<Webster.LegacyStack.Item>Content</Webster.LegacyStack.Item>
<WebsterLegacyStack.Item>Content</WebsterLegacyStack.Item>
```

The following patterns are not warnings:

```js
import {Stack, LegacyStack} from '@tpw/webster';

<Stack.Item fill><span>Content</span></Stack.Item>
<Stack><span>No wrapping item</span></Stack>
<LegacyStack.Item fill><span>Content</span></LegacyStack.Item>
<LegacyStack><span>No wrapping item</span></LegacyStack>
```

