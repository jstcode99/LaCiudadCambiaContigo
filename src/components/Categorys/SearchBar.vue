<template>
  <li class="nav-item nav-search">
    <!-- Icon -->
    <a
      href="javascript:void(0)"
      class="nav-link nav-link-search"
      @click="showSearchBar = true"
    >
      <b-icon icon="Search" size="21" />
    </a>

    <!-- Input -->
    <div class="search-input" :class="{ open: showSearchBar }">
      <div class="search-input-icon">
        <b-icon icon="Search" />
      </div>
      <!-- <input type="text" placeholder="Explore Vuexy...." class="form-control-input"> -->
      <!-- @keyup.esc="escPressed" -->
      <!-- @keyup.enter="suggestionSelected" -->
      <b-form-input
        v-if="showSearchBar"
        v-model="searchQuery"
        placeholder="Explore Vuexy"
        autofocus
        autocomplete="off"
        @keyup.up="increaseIndex(false)"
        @keyup.down="increaseIndex"
        @keyup.esc="
          showSearchBar = false;
          resetsearchQuery();
        "
        @keyup.enter="suggestionSelected"
        @blur.stop="
          showSearchBar = false;
          resetsearchQuery();
        "
      />
      <div
        class="search-input-close"
        @click="
          showSearchBar = false;
          resetsearchQuery();
        "
      >
        <b-icon icon="X" />
      </div>

      <!-- Suggestions List -->
      <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="search-list search-list-main scroll-area overflow-hidden"
        :class="{ show: searchQuery }"
        tagname="ul"
      >
        <li
          v-for="(suggestion_list, grp_name, grp_index) in filteredData"
          :key="grp_index"
          class="suggestions-groups-list"
        >
          <!-- Group Header -->
          <p class="suggestion-group-title">
            <span>
              {{ title(grp_name) }}
            </span>
          </p>

          <!-- Suggestion List of each group -->
          <ul>
            <li
              v-for="(suggestion, index) in suggestion_list"
              :key="index"
              class="suggestion-group-suggestion cursor-pointer"
              :class="{
                'suggestion-current-selected':
                  currentSelected === `${grp_index}.${index}`,
              }"
              @mouseenter="currentSelected = `${grp_index}.${index}`"
              @mousedown.prevent="suggestionSelected(grp_name, suggestion)"
            >
              <b-link class="p-0 text-decoration-none text-dark">
                <span class="align-middle">{{ suggestion.title }}</span>
              </b-link>
            </li>

            <li
              v-if="!suggestion_list.length && searchQuery"
              class="suggestion-group-suggestion no-results"
            >
              <p>No Results Found.</p>
            </li>
          </ul>
        </li>
      </vue-perfect-scrollbar>
    </div>
  </li>
</template>

<script>
import { BFormInput, BLink } from "bootstrap-vue";
import { ref, watch } from "@vue/composition-api";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import useAutoSuggest from "@/components/app-auto-suggest/useAutoSuggest";
import { title } from "@/utils/filter";
import router from "@/router";
import store from "@/store";
import videos from "@/data/videos.json";

export default {
  components: {
    BFormInput,
    BLink,
    VuePerfectScrollbar,
  },
  setup() {
    const showSearchBar = ref(false);

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
    };

    const suggestionSelected = (grpName, suggestion) => {
      // If parameter is not provided => Use current selected
      if (grpName === "videos") router.push({ name: 'video', params: { id: suggestion.id } });
      // eslint-disable-next-line no-use-before-define
      resetsearchQuery();
      showSearchBar.value = false;
    };

    const { searchQuery, resetsearchQuery, filteredData } = useAutoSuggest({
      data: { videos: { key: "title", data: videos } },
      searchLimit: 4,
    });

    watch(searchQuery, (val) => {
      store.commit("toggleOverlay", Boolean(val));
    });

    const currentSelected = ref(-1);
    watch(filteredData, (val) => {
      if (!Object.values(val).some((obj) => obj.length)) {
        currentSelected.value = -1;
      } else {
        // Auto Select first item if it's not item-404
        let grpIndex = null;

        // eslint-disable-next-line no-restricted-syntax
        for (const [index, grpSuggestions] of Object.values(val).entries()) {
          if (grpSuggestions.length) {
            grpIndex = index;
            break;
          }
        }

        if (grpIndex !== null) currentSelected.value = `${grpIndex}.0`;
      }
    });

    const increaseIndex = (val = true) => {
      /* eslint-disable no-lonely-if, no-plusplus */

      // If there's no matching items
      if (
        !Object.values(filteredData.value).some((grpItems) => grpItems.length)
      )
        return;

      const [grpIndex, itemIndex] = currentSelected.value.split(".");

      const grpArr = Object.entries(filteredData.value);
      const activeGrpTotalItems = grpArr[grpIndex][1].length;

      if (val) {
        // If active item is not of last item in grp
        if (activeGrpTotalItems - 1 > itemIndex) {
          currentSelected.value = `${grpIndex}.${Number(itemIndex) + 1}`;

          // If active item grp is not last in grp list
        } else if (grpIndex < grpArr.length - 1) {
          for (let i = Number(grpIndex) + 1; i < grpArr.length; i++) {
            // If navigating group have items => Then move in that group
            if (grpArr[i][1].length > 0) {
              currentSelected.value = `${Number(i)}.0`;
              break;
            }
          }
        }
      } else {
        // If active item is not of first item in grp
        if (Number(itemIndex)) {
          currentSelected.value = `${grpIndex}.${Number(itemIndex) - 1}`;

          // If active item grp  is not first in grp list
        } else if (Number(grpIndex)) {
          for (let i = Number(grpIndex) - 1; i >= 0; i--) {
            // If navigating group have items => Then move in that group
            if (grpArr[i][1].length > 0) {
              currentSelected.value = `${i}.${grpArr[i][1].length - 1}`;
              break;
            }
          }
        }
      }
      /* eslint-enable no-lonely-if, no-plusplus */
    };

    return {
      showSearchBar,
      perfectScrollbarSettings,
      videos,
      title,
      suggestionSelected,
      currentSelected,
      increaseIndex,

      // AutoSuggest
      searchQuery,
      resetsearchQuery,
      filteredData,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}
.nav-search {
  .form-control,
  .btn-secondary {
    color: var(--gray-dark);
    background: var(--gray-600);
  }
}
.search-input {
  .input,
  .search-list .auto-suggestion span {
    color: var(--dark) !important;
    background: var(--dark);

  }
}

.search-list {
  max-height: 450px;
  height: auto;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--primary);
  width: 100%;
  margin-top: 0.5rem;
  padding-left: 0;
  border-radius: var(--border-radius);
  display: none;
  @media only screen and (min-device-width: 320px) and (max-device-width: 875px) and (orientation: landscape) {
    max-height: 250px;
  }

  &.search-list-bookmark {
    height: auto !important;
    i,
    svg {
      font-size: 1.2rem;
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  &.show {
    display: block;
    min-height: 2rem;
  }

  li {
    a {
      padding: 0.9rem 1rem;
      color: var(--primary);
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }

    &:last-child {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &.auto-suggestion {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover,
      &.current_item {
        background-color: var(--body-bg);
      }
    }
  }
}
.suggestion-group-title {
  font-weight: 800;
  color: var(--dark);
  padding: 0.75rem 1rem 0.25rem;
}

.suggestion-group-suggestion {
  padding: 0.75rem 1rem;
}
.suggestion-group-suggestion:hover {
  background: var(--theme-dark-body-color);
  color: var(--ligth);
}
.suggestion-current-selected {
  background-color: var(--body-bg);

  .dark-layout & {
    background-color: var(--theme-dark-body-bg);
  }
}
</style>
