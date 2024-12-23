<script lang="ts">
  import Botpoison from "@botpoison/browser";
  import Spinner from "$lib/Spinner.svelte";

  interface Props {
    id?: string;
    botpoisonKey?: string;
    isPhoneRequired?: boolean;
  }

  type Status = "Unsubmitted" | "Submitting" | "Submitted";

  let { id = "", botpoisonKey = "", isPhoneRequired = false }: Props = $props();

  const FORMSPARK_ACTION_URL = `https://submit-form.com/${id}`;

  let botpoison: Botpoison;

  let status: Status = $state("Unsubmitted");

  let firstName = $state("");
  let lastName = $state("");
  let email = $state("");
  let phone = $state("");
  let message = $state("");

  $effect(() => {
    botpoison = new Botpoison({
      publicKey: botpoisonKey,
    });
  });

  const handleSubmit = async (event: SubmitEvent, url: string) => {
    event.preventDefault();

    try {
      status = "Submitting";

      const { solution } = await botpoison.challenge();

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          _botpoison: solution,
          _email: {
            from: "Allstate Background Searches",
            subject: `Contact Form Submission: ${lastName}, ${firstName}`,
            template: {
              title: false,
              footer: false,
            },
          },
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      status = "Submitted";
    }
  };
</script>

<div class="flow">
  {#if status === "Submitted"}
    <p class="h2">Thank you for your message!</p>
    <p>
      We have received your message and will contact you as soon as possible.
    </p>
  {:else}
    <form
      class="flow"
      onsubmit={(event) => handleSubmit(event, FORMSPARK_ACTION_URL)}
    >
      <div>
        <label for="first-name"
          >First Name <span class="required">*</span></label
        >
        <input
          type="text"
          id="first-name"
          name="first-name"
          bind:value={firstName}
          required
        />
      </div>
      <div>
        <label for="last-name">Last Name <span class="required">*</span></label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          bind:value={lastName}
          required
        />
      </div>
      <div>
        <label for="email">Email <span class="required">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={email}
          required
        />
      </div>
      <div>
        <label for="phone"
          >Phone {#if isPhoneRequired}<span class="required">*</span
            >{/if}</label
        >
        <input
          type="phone"
          id="phone"
          name="phone"
          bind:value={phone}
          required={isPhoneRequired}
        />
      </div>

      <div>
        <label for="message">Message <span class="required">*</span></label>
        <textarea
          bind:value={message}
          rows="10"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <div style="display: contents;">
        <input
          type="checkbox"
          name="_honeypot"
          style="display:none"
          tabindex="-1"
          autocomplete="off"
        />
      </div>
      <div>
        <button type="submit">
          {#if status === "Submitting"}
            <Spinner />
          {:else}
            Submit Message
          {/if}
        </button>
      </div>
    </form>
  {/if}
</div>

<style>
  div {
    display: grid;
    gap: var(--size-0-2-5);
  }

  .h2 {
    color: var(--accent);
  }
</style>
