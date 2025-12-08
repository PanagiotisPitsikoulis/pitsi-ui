## 2. Βιβλιογραφική Επισκόπηση

### 2.1 Παραδοσιακά Μοντέλα Διανομής Συστατικών

Η διανομή επαναχρησιμοποιήσιμων συστατικών λογισμικού έχει εξελιχθεί σημαντικά κατά τη διάρκεια των τελευταίων δεκαετιών. Στις αρχές της ανάπτυξης web εφαρμογών, οι προγραμματιστές βασίζονταν σε χειροκίνητη αντιγραφή αρχείων κώδικα από έργο σε έργο, μια διαδικασία που ήταν επιρρεπής σε λάθη και δυσκολοκατόρθωτη στη διαχείριση εκδόσεων. Η έλλειψη τυποποιημένου μηχανισμού διανομής οδηγούσε σε προβλήματα συντήρησης, καθώς οι ενημερώσεις έπρεπε να εφαρμόζονται χειροκίνητα σε κάθε έργο ξεχωριστά.

Το 2010, ο Isaac Z. Schlueter εισήγαγε το **npm** (Node Package Manager), ένα επαναστατικό σύστημα διαχείρισης πακέτων που μετέτρεψε τον τρόπο με τον οποίο οι προγραμματιστές JavaScript μοιράζονται και χρησιμοποιούν κώδικα. Το npm registry, το κεντρικό αποθετήριο πακέτων, έχει αναπτυχθεί εκθετικά από την εμφάνισή του, φιλοξενώντας σήμερα πάνω από 2 εκατομμύρια πακέτα που καλύπτουν κάθε πτυχή της ανάπτυξης λογισμικού. Αυτή η ανάπτυξη αντικατοπτρίζει τη μαζική υιοθέτηση της JavaScript ως γλώσσας προγραμματισμού τόσο στο front-end όσο και στο back-end της ανάπτυξης web.

Κεντρικό στοιχείο του npm ecosystem είναι το **semantic versioning** (semver), ένα σύστημα αριθμοδότησης εκδόσεων που ακολουθεί τη μορφή MAJOR.MINOR.PATCH (π.χ., 2.4.1). Σύμφωνα με αυτό το σύστημα, η αύξηση του MAJOR αριθμού υποδεικνύει breaking changes που δεν είναι συμβατά με προηγούμενες εκδόσεις, η αύξηση του MINOR αριθμού προσθέτει νέες λειτουργίες με backward-compatible τρόπο, ενώ η αύξηση του PATCH αριθμού υποδεικνύει διορθώσεις σφαλμάτων. Αυτή η τυποποίηση επιτρέπει στους προγραμματιστές να εκφράζουν εξαρτήσεις με ευελιξία, χρησιμοποιώντας σημειογραφίες όπως `^2.4.1` (οποιαδήποτε έκδοση >=2.4.1 και <3.0.0) ή `~2.4.1` (οποιαδήποτε έκδοση >=2.4.1 και <2.5.0).

Το 2016, η Facebook εισήγαγε το **Yarn**, έναν εναλλακτικό package manager που στόχευε να αντιμετωπίσει συγκεκριμένες αδυναμίες του npm. Η πιο σημαντική καινοτομία του Yarn ήταν η **deterministic dependency resolution**, που επιτυγχάνεται μέσω του αρχείου `yarn.lock`. Αυτό το αρχείο καταγράφει τις ακριβείς εκδόσεις κάθε εξάρτησης που εγκαταστάθηκε, εγγυώμενο ότι όλοι οι προγραμματιστές μιας ομάδας και το CI/CD περιβάλλον θα λάβουν τις ίδιες ακριβώς εκδόσεις. Επιπλέον, το Yarn εισήγαγε **parallel downloads**, κατεβάζοντας πολλαπλά πακέτα ταυτόχρονα αντί για σειριακή λήψη, επιταχύνοντας σημαντικά τη διαδικασία εγκατάστασης.

Την ίδια χρονιά, το **pnpm** (performant npm) εμφανίστηκε με μια ριζικά διαφορετική προσέγγιση στην αποθήκευση πακέτων. Αντί να δημιουργεί αντίγραφα των πακέτων σε κάθε έργο, το pnpm χρησιμοποιεί ένα **content-addressable storage** σύστημα όπου όλα τα πακέτα αποθηκεύονται σε ένα κεντρικό κατάλογο (συνήθως `~/.pnpm-store`). Τα έργα συνδέονται σε αυτά τα πακέτα μέσω **hard links** και **symlinks**, επιτυγχάνοντας εξοικονόμηση δίσκου που ξεπερνά το 50% σε σύγκριση με το npm ή το Yarn. Για παράδειγμα, αν δέκα έργα χρησιμοποιούν το ίδιο πακέτο (π.χ., `react@18.2.0`), το pnpm θα αποθηκεύσει μόνο ένα αντίγραφο αυτού του πακέτου στο δίσκο, με όλα τα έργα να αναφέρονται σε αυτό το ίδιο αντίγραφο.

Παρά τα πλεονεκτήματα των παραδοσιακών package managers, υπάρχουν σημαντικοί περιορισμοί όταν εφαρμόζονται σε UI component libraries. Το **bundle size overhead** είναι ένα κρίσιμο πρόβλημα: όταν μια βιβλιοθήκη εξάγεται ως npm πακέτο, συχνά περιλαμβάνει ολόκληρη τη βιβλιοθήκη στο τελικό bundle, ακόμα και αν ο χρήστης χρησιμοποιεί μόνο ένα μικρό υποσύνολο των συστατικών. Παρότι υπάρχουν τεχνικές **tree-shaking** που αφαιρούν αχρησιμοποίητο κώδικα κατά τη διαδικασία του bundling, αυτές δεν είναι πάντα αποτελεσματικές, ειδικά όταν η βιβλιοθήκη περιλαμβάνει side effects ή δεν είναι δομημένη με τρόπο που να υποστηρίζει tree-shaking.

Οι **styling constraints** αποτελούν επίσης σημαντικό περιορισμό. Οι περισσότερες component libraries έρχονται με προκαθορισμένα styling συστήματα (CSS-in-JS, preprocessors, ή pre-compiled CSS), τα οποία μπορεί να μην ταιριάζουν με την τεχνολογική στοίβα ή τις design απαιτήσεις του έργου του χρήστη. Η προσαρμογή των styles συχνά απαιτεί override των default styles μέσω specificity wars ή !important declarations, οδηγώντας σε fragile και δυσδιάκριτο CSS.

Τέλος, το **version lock-in** είναι ένα χρόνιο πρόβλημα. Όταν μια βιβλιοθήκη κυκλοφορεί μια νέα major version με breaking changes, η μετάβαση μπορεί να απαιτήσει σημαντική προσπάθεια refactoring. Επειδή τα components είναι "μαύρα κουτιά" που παρέχονται μέσω του node_modules, οι προγραμματιστές δεν έχουν άμεση πρόσβαση στον πηγαίο κώδικα για να κάνουν gradual μετάβαση ή να διατηρήσουν παλαιότερες εκδόσεις με custom patches.

### 2.2 Το Copy-Paste Paradigm και το shadcn/ui

Στις αρχές του 2023, ο shadcn (pseudonym του developer) εισήγαγε ένα ριζικά διαφορετικό paradigm στη διανομή UI components με το **shadcn/ui**. Αντί να διανέμει components ως npm πακέτα, το shadcn/ui υιοθετεί μια "copy-paste" προσέγγιση όπου οι προγραμματιστές αντιγράφουν τον πηγαίο κώδικα των components απευθείας στο έργο τους. Αυτή η φιλοσοφία αντιπροσωπεύει μια αλλαγή νοοτροπίας: τα components δεν είναι πλέον αδιαπέραστα black boxes, αλλά **starting points** που οι προγραμματιστές μπορούν να τροποποιήσουν, να επεκτείνουν και να προσαρμόσουν στις συγκεκριμένες ανάγκες τους.

Η αρχιτεκτονική του shadcn/ui βασίζεται σε τρεις θεμελιώδεις επιλογές. Πρώτον, όλα τα components χτίζονται πάνω στα **Radix UI Primitives**, μια συλλογή από unstyled, accessible component primitives που παρέχουν πλήρη keyboard navigation, screen reader support, και focus management. Τα Radix UI Primitives ακολουθούν τα **WAI-ARIA design patterns**, εξασφαλίζοντας ότι τα components είναι προσβάσιμα σε χρήστες με αναπηρίες χωρίς να απαιτείται επιπλέον δουλειά από τον προγραμματιστή.

Δεύτερον, το styling επιτυγχάνεται μέσω του **Tailwind CSS** σε συνδυασμό με **CSS variables** για theming. Η επιλογή του Tailwind CSS παρέχει utility-first styling που είναι εύκολα κατανοητό και τροποποιήσιμο, ενώ η χρήση CSS variables (π.χ., `--primary`, `--background`, `--foreground`) επιτρέπει dynamic theming χωρίς JavaScript overhead. Για παράδειγμα, ένα button component μπορεί να χρησιμοποιεί `bg-primary text-primary-foreground`, όπου αυτές οι κλάσεις αντιστοιχίζονται σε CSS variables που μπορούν να αλλάξουν βάσει του επιλεγμένου theme (light/dark mode).

Τρίτον, το shadcn/ui είναι **TypeScript-first** με πλήρεις type definitions. Κάθε component εξάγει τους types του, επιτρέποντας στους προγραμματιστές να έχουν autocomplete και type checking κατά την ανάπτυξη. Αυτό είναι ιδιαίτερα σημαντικό σε μεγάλα έργα όπου η τύπωση μπορεί να αποτρέψει bugs που σχετίζονται με λανθασμένα props ή API misuse.

Το κεντρικό σημείο διαμόρφωσης είναι το αρχείο **components.json**, το οποίο αποθηκεύεται στο root του έργου. Αυτό το αρχείο ορίζει τα path aliases (π.χ., `@/components`, `@/lib`), το style variant (default, new-york, κλπ.), τη CSS variables prefix, και άλλες ρυθμίσεις. Όταν ο προγραμματιστής εκτελεί την εντολή `npx shadcn-ui@latest add button`, το CLI διαβάζει αυτό το configuration file και τοποθετεί τα αρχεία στις σωστές θέσεις με βάση τα ορισμένα aliases.

Η επιτυχία του shadcn/ui ήταν εκρηκτική. Εντός λιγότερο από δύο ετών, το repository συγκέντρωσε πάνω από **80,000 GitHub stars**, καθιστώντας το ένα από τα πιο δημοφιλή UI libraries στο JavaScript ecosystem. Αυτή η ευρεία υιοθέτηση οφείλεται στην απλότητα του concept, την εξαιρετική developer experience, και τη φιλοσοφία του "own your components" που δίνει στους προγραμματιστές πλήρη έλεγχο χωρίς vendor lock-in.

### 2.3 Τεχνολογίες Μετασχηματισμού Κώδικα

Ο μετασχηματισμός κώδικα σε επίπεδο πηγαίου κώδικα βασίζεται στην έννοια του **Abstract Syntax Tree** (AST), μιας δενδρικής αναπαράστασης της συντακτικής δομής του προγράμματος. Το AST αποτελεί την ενδιάμεση μορφή που οι compilers και transpilers χρησιμοποιούν για να κατανοήσουν και να μετασχηματίσουν τον κώδικα. Για παράδειγμα, η απλή δήλωση `const x = 5 + 3` μετατρέπεται σε ένα δέντρο όπου ο root node είναι μια `VariableDeclaration`, με child nodes που αναπαριστούν τον identifier (`x`), τον τελεστή πρόσθεσης (`+`), και τις τιμές (`5`, `3`).

Το **Babel** είναι το πιο διαδεδομένο εργαλείο transpilation στο JavaScript ecosystem. Η αρχιτεκτονική του βασίζεται σε ένα **plugin system** όπου κάθε plugin μπορεί να ορίσει visitors για συγκεκριμένους τύπους AST nodes. Το **visitor pattern** επιτρέπει στους developers να γράψουν transformations που εφαρμόζονται σε συγκεκριμένα μέρη του κώδικα. Για παράδειγμα, ένα plugin μπορεί να ορίσει έναν visitor για `ArrowFunctionExpression` nodes και να τους μετατρέψει σε regular function expressions για backward compatibility με παλαιότερα browsers. Το Babel χρησιμοποιείται κυρίως για **transpilation** - μετατροπή σύγχρονου JavaScript (ES2015+, JSX) σε κώδικα που μπορεί να εκτελεστεί σε παλαιότερα περιβάλλοντα.

Το **ts-morph** είναι ένα TypeScript-specific εργαλείο που παρέχει ένα wrapper API πάνω στο TypeScript Compiler API. Το κύριο πλεονέκτημά του είναι η πρόσβαση σε **full type information**, επιτρέποντας **semantic analysis** που δεν είναι δυνατή με pure AST manipulation. Για παράδειγμα, το ts-morph μπορεί να καθορίσει ότι μια μεταβλητή είναι τύπου `string | number` αναλύοντας το type system, κάτι που δεν μπορεί να γίνει με static parsing μόνο. Αυτό το καθιστά ιδανικό για εργαλεία που χρειάζονται να κατανοήσουν τη σημασιολογία του κώδικα, όχι μόνο τη σύνταξή του.

Το **jscodeshift** είναι ένα toolkit για **codemods** - automated code refactoring σε μεγάλη κλίμακα. Χτισμένο πάνω στο recast, το jscodeshift παρέχει ένα fluent API για να ψάξει και να μετασχηματίσει AST nodes. Είναι ιδιαίτερα χρήσιμο για migrations όπου χιλιάδες αρχεία πρέπει να ενημερωθούν ταυτόχρονα, όπως η μετονομασία ενός API ή η μετάβαση σε ένα νέο framework pattern.

Το **recast** διαφοροποιείται με την εστίασή του στο **formatting preservation**. Ενώ τα περισσότερα AST tools αναδημιουργούν τον κώδικα από το AST με τη δική τους formatting λογική, το recast προσπαθεί να διατηρήσει όσο το δυνατόν περισσότερο το original formatting, αλλάζοντας μόνο τα parts που πράγματι μετασχηματίστηκαν. Αυτό είναι κρίσιμο για readable diffs και για να αποφευχθούν massive formatting changes σε pull requests.

Το **pitsi/ui** επιλέγει να χρησιμοποιήσει **ts-morph** για τρεις κύριους λόγους. Πρώτον, η ανάγκη για ακριβή **import manipulation**: όταν προσθέτει ένα component, το CLI πρέπει να μπορεί να εντοπίσει και να προσθέσει τα σωστά imports, λαμβάνοντας υπόψη τα path aliases που ορίζονται στο `tsconfig.json`. Το ts-morph παρέχει APIs όπως `addImportDeclaration()` που χειρίζονται αυτόματα edge cases όπως duplicate imports ή merging named imports.

Δεύτερον, η **dependency analysis** απαιτεί semantic understanding. Όταν ένα component εξαρτάται από ένα utility function ή ένα άλλο component, το ts-morph μπορεί να αναλύσει τα imports και exports για να κατασκευάσει το dependency graph. Αυτό επιτρέπει στο CLI να εγκαταστήσει αυτόματα όλες τις απαραίτητες εξαρτήσεις όταν ο χρήστης προσθέτει ένα component.

Τρίτον, η **type extraction** είναι απαραίτητη για τη δημιουργία documentation και autocomplete. Το ts-morph μπορεί να εξάγει τα exported types από ένα component file και να τα χρησιμοποιήσει για να δημιουργήσει API documentation ή type definition files.

### 2.4 Monorepo Architecture

Η **monorepo architecture** αναφέρεται στην πρακτική αποθήκευσης πολλαπλών έργων (packages, applications) σε ένα single version-controlled repository. Αυτή η προσέγγιση έχει υιοθετηθεί από μεγάλες τεχνολογικές εταιρείες όπως η **Google** (όλος ο κώδικας σε ένα massive monorepo), η **Meta** (Facebook, Instagram, WhatsApp σε ένα repository), και η **Microsoft** (Windows components, Office applications). Τα πλεονεκτήματα περιλαμβάνουν atomic commits across multiple packages, εύκολη code sharing, και simplified dependency management.

Το **pnpm Workspaces** είναι το workspace solution που ενσωματώνεται στο pnpm. Επιτρέπει την οργάνωση πολλαπλών packages σε ένα repository και τη διαχείριση των dependencies μεταξύ τους. Η ρύθμιση γίνεται μέσω του `pnpm-workspace.yaml` file όπου ορίζονται τα patterns για τα packages (π.χ., `apps/*`, `packages/*`). Η **workspace:* syntax** επιτρέπει στα packages να αναφέρονται σε άλλα packages του workspace χρησιμοποιώντας `"dependency": "workspace:*"` στο `package.json`, και το pnpm αυτόματα δημιουργεί **symlinks** αντί να εγκαθιστά από το npm registry.

Το **Turborepo** είναι ένα build system optimization tool που παρέχει **incremental builds**, **remote caching**, και **task orchestration**. Η incremental builds λειτουργικότητα σημαίνει ότι το Turborepo εντοπίζει ποια packages έχουν αλλάξει (με βάση το git history) και rebuilds μόνο αυτά και τα downstream dependencies τους. Το **remote caching** επιτρέπει στην ομάδα να μοιράζεται build artifacts: αν ένας developer έχει ήδη build ένα package με συγκεκριμένο commit hash, άλλοι developers μπορούν να κατεβάσουν το cached build αποτέλεσμα αντί να το rebuild.

Το **task orchestration** είναι ίσως η πιο ισχυρή δυνατότητα του Turborepo. Στο `turbo.json`, ορίζονται tasks (π.χ., `build`, `test`, `lint`) και οι εξαρτήσεις τους. Για παράδειγμα, μπορεί να οριστεί ότι το `build` task εξαρτάται από το `^build` (build όλων των dependencies πρώτα), και το Turborepo θα δημιουργήσει ένα dependency graph και θα εκτελέσει τα tasks με τη σωστή σειρά, παράλληλα όπου είναι δυνατόν.

Το **pitsi/ui** επέλεξε τον συνδυασμό **pnpm + Turborepo** αντί για εναλλακτικές όπως το **Nx** για συγκεκριμένους λόγους. Το pnpm παρέχει το καλύτερο disk space efficiency και την ταχύτερη installation speed, κάτι που είναι κρίσιμο σε ένα monorepo με πολλά packages. Το Turborepo επιλέχθηκε έναντι του Nx επειδή είναι πιο lightweight και easier to configure - το Nx προσφέρει περισσότερες features (code generation, migration tools) αλλά με το κόστος μεγαλύτερης πολυπλοκότητας. Για ένα project σαν το pitsi/ui που εστιάζει κυρίως σε build optimization και task parallelization, το Turborepo παρέχει το ideal balance μεταξύ δυνατοτήτων και απλότητας.

### 2.5 Schema Validation με Zod

Το **Zod** είναι μια TypeScript-first schema validation library που διακρίνεται από εναλλακτικές όπως το Joi ή το Yup με τη βαθιά ενσωμάτωσή του με το TypeScript type system. Ενώ το Joi και το Yup προϋπήρχαν του TypeScript και προσθέτουν type support ως afterthought, το Zod σχεδιάστηκε από την αρχή για TypeScript, επιτρέποντας **type inference** από τα schemas.

Το κεντρικό feature του Zod είναι το **z.infer**, το οποίο επιτρέπει την εξαγωγή TypeScript types από τα runtime schemas. Για παράδειγμα:

```typescript
const userSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
  email: z.string().email(),
})

type User = z.infer<typeof userSchema>
// Αυτόματα inferred: { name: string; age: number; email: string }
```

Αυτό εξαλείφει το DRY violation που υπάρχει με άλλες libraries όπου πρέπει να οριστούν τόσο το runtime schema όσο και ο TypeScript type ξεχωριστά.

Η **runtime validation** είναι επίσης απλή και type-safe. Η μέθοδος `.parse()` validated και returns τα data με το inferred type, ή throws exception αν η validation αποτύχει. Η `.safeParse()` variant επιστρέφει ένα result object με `success: boolean` και είτε `data` είτε `error`, επιτρέποντας error handling χωρίς exceptions.

Το Zod υποστηρίζει ισχυρή **composition** μέσω methods όπως `.extend()`, `.merge()`, και `.pick()`. Αυτό επιτρέπει την επαναχρησιμοποίηση schemas και τη δημιουργία complex schemas από simpler ones:

```typescript
const baseSchema = z.object({ id: z.string() })
const extendedSchema = baseSchema.extend({
  name: z.string(),
  metadata: z.record(z.unknown())
})
```

Τα **transformations** είναι ένα advanced feature που επιτρέπει στα schemas όχι μόνο να validate αλλά και να transform data. Για παράδειγμα, το `.transform()` μπορεί να μετατρέψει ένα string σε Date object ή να normalize data format:

```typescript
const dateSchema = z.string().transform(str => new Date(str))
```

Στο **pitsi/ui**, το Zod χρησιμοποιείται εκτενώς σε τρεις κύριες περιοχές. Πρώτον, το **registry schema** ορίζεται στο `packages/pitsi/src/schema/index.ts` και validate τη δομή κάθε registry item. Αυτό εξασφαλίζει ότι κάθε component, hook, ή utility που προστίθεται στο registry ακολουθεί το σωστό format με όλα τα απαραίτητα fields (name, type, files, dependencies, κλπ.).

Δεύτερον, το **components.json validation** χρησιμοποιεί Zod για να validate το configuration file που δημιουργείται από την `init` command. Το schema ορίζει όλα τα πιθανά configuration options, τα defaults, και τις validation rules. Αυτό επιτρέπει στο CLI να παρέχει χρήσιμα error messages όταν το configuration file έχει invalid format.

Τρίτον, το **API validation** στα registry endpoints (`apps/v4/app/r/[...path]/route.ts`) χρησιμοποιεί Zod για να validate request parameters και responses. Αυτό εξασφαλίζει type safety στο API boundary και παρέχει clear error responses όταν τα requests δεν ακολουθούν το αναμενόμενο schema.

Η χρήση του Zod σε όλο το pitsi/ui codebase δημιουργεί ένα single source of truth για data structures, με runtime validation που συγχρονίζεται αυτόματα με τα TypeScript types. Αυτό βελτιώνει την ασφάλεια, μειώνει τα bugs, και κάνει τον κώδικα πιο maintainable καθώς οι αλλαγές στα schemas αντικατοπτρίζονται αυτόματα στο type system.
