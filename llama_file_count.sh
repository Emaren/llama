#!/bin/bash

count_py() { find "$1" -type f -name "*.py" 2>/dev/null | wc -l; }
count_json() { find "$1" -type f -name "*.json" 2>/dev/null | wc -l; }
count_tsx() { find "$1" -type f -name "*.tsx" 2>/dev/null | wc -l; }
count_all() { find "$1" -type f ! -name ".*" 2>/dev/null | wc -l; }

echo "Files count per directory (recursive, includes subfolders):"
echo "-----------------------------------------------------------"

declare -a dirs
declare -a py_counts
declare -a json_counts
declare -a tsx_counts

while IFS= read -r -d '' dir; do
  py=$(count_py "$dir")
  json=$(count_json "$dir")
  tsx=$(count_tsx "$dir")
  total=$((py + json + tsx))

  if (( total > 0 )); then
    printf "%-50s Total files: %5d (py/json/tsx = %3d / %3d / %3d)\n" "$dir" "$total" "$py" "$json" "$tsx"

    dirs+=("$dir")
    py_counts+=("$py")
    json_counts+=("$json")
    tsx_counts+=("$tsx")
  fi
done < <(find . -type d \! -path "./.git*" \! -path "*/.*" -print0)

echo
echo "Calculating total unique files across repo (no double counting)..."
echo "-------------------------------------------------------------------"

count_ext() {
  find . -type f -name "*.$1" ! -path "./.git/*" ! -path "*/.*" | sort -u | wc -l
}

py_count=$(count_ext py)
json_count=$(count_ext json)
tsx_count=$(count_ext tsx)
total_unique=$((py_count + json_count + tsx_count))

frontend_total=$(count_all frontend)
backend_total=$(count_all backend)
shared_total=$(count_all shared)
data_total=$(count_all data)

echo "Unique totals:"
printf "  py files  : %d\n" "$py_count"
printf "  json files: %d\n" "$json_count"
printf "  tsx files : %d\n" "$tsx_count"
echo "  ---------------------------"
printf "  Total     : %d                                %d/%d/%d/%d\n" \
  "$total_unique" "$frontend_total" "$backend_total" "$shared_total" "$data_total"
