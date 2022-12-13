import { IssueType } from "../../prisma/issueType"
import { IssueIcons, IssuePpl } from "../board/previewInfo"

const SearchPreview = ({
  issues,
  search,
  index,
}: {
  issues: IssueType[]
  search: string
  index: number
}) => {
  const statuses = ["TO-DO", "IN PROGRESS", "DONE"]

  return (
    <>
      {issues.map((issue) => {
        return (
          <>
            {search === "" || issue.name.includes(search) ? (
              <button
                key={issue.id}
                onClick={() => {
                  // setPop(true)
                }}
                className="mb-2 w-full rounded border-[1px] border-gray-300 bg-white p-3 duration-100 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
                <div className="flex w-full items-center justify-between">
                  <div>
                    <h3 className="mr-2 mb-3 flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-base font-medium md:mr-4">
                      {issue.name}
                      {/* data.name */}
                    </h3>
                    <div className="flex items-center">
                      {index === 0 || index === 1 || index === 2 ? (
                        <div className="mr-2 rounded bg-gray-150 py-1 px-1.5 text-xs font-medium text-gray-600">
                          {statuses[index]}
                        </div>
                      ) : null}
                      <IssueIcons
                        type={issue.issueType}
                        priority={issue.priority}
                      />
                    </div>
                  </div>
                  <IssuePpl bigger qty={3} />
                </div>
              </button>
            ) : null}
          </>
        )
      })}
    </>
  )
}

export default SearchPreview
